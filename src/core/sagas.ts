import lodash from 'lodash';
import { delay, eventChannel } from 'redux-saga';
import {
  call, fork, put, race, select, take, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { createAction, getType } from 'typesafe-actions';
import uuid from 'uuid';
import { setText } from './root-action';
import { IRootState } from './root-reducer';

function* handleBroadcastMsgSaga() {
  yield takeEvery('@@BROADCAST_MSG', function*(action: any) {
    console.log('handleBroadcastMsg', action.payload);
    yield put(setText(action.payload.text));
  });
}

export default function createRootSaga(io: SocketIO.Server) {
  return function* rootSaga() {
    yield fork(handleBroadcastMsgSaga, io);

    const channel = createChannel(io);
    while (true) {
      const { type, payload, socket }: { type: any, payload: any, socket: SocketIO.Socket }
        = yield take(channel);
      if (type === 'NEW_CONNECTION') {
        // 新的connection
        const subState: Pick<IRootState, 'text'> =
          yield select<IRootState>((s) => {
            const ret = lodash.pick(s, ['text']);
            return ret;
          });
        socket.emit('TEXT_CHANGE', subState.text );
      } else {
        yield put({ type, payload, socket });
      }
    }
  };
}

function createChannel(io: SocketIO.Server) {
  return eventChannel((emit) => {
    io.on('connection', (socket) => {
      emit({ socket, type: 'NEW_CONNECTION' });

      socket.on('admin', (action) => {
        const { type, payload } = action;
        console.log(payload);
        emit({ type, payload, socket });
        io.emit('TEXT_CHANGE', payload.text);
        // socket.emit('TEXT_CHANGE', 'abc'); // send to the current connected client
      });
    });

    const unsubscribe = () => {
      io.close();
    };
    return unsubscribe;
  });
}
