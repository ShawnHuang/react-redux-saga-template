
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import reduxSaga from 'redux-saga';
import { IRootState, rootReducer } from './root-reducer';
import { default as createRootSaga } from './sagas';

export function configureStore({
  initialState,
  io }: {
    initialState?: IRootState,
    io?: SocketIO.Server,
  } = {},
) {
  // configure middlewares
  const sagaMiddleware = reduxSaga();
  const middlewares: Middleware[] = [
    sagaMiddleware,
  ];
  // compose enhancers
  const enhancer = compose(
    applyMiddleware(...middlewares),
  );
  // create store
  const reduxStore = createStore(
    rootReducer,
    initialState!,
    enhancer,
  );

  if (io) {
    sagaMiddleware.run(createRootSaga(io));
  }
  return reduxStore;
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
