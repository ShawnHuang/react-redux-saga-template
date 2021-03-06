import { adminEmit } from '../socket';
// action types
export const ActionTypes = {
    BROADCAST_MSG: '@@BROADCAST_MSG',
    TEXT_CHANGE: 'TEXT_CHANGE',
};

// reducer with initial state
const initialState = {
    text: "",
};

export const Actions = {
    broadcastMsg: (text) => (dispatch, getState) => {
        console.log("shawn test", text);
        dispatch({ type: ActionTypes.TEXT_CHANGE, payload: text })
        adminEmit({ type: ActionTypes.BROADCAST_MSG, payload: { text } })
    },
}

export default function reducer(state = initialState, action) {
    if (action.type === ActionTypes.TEXT_CHANGE) {
        console.log("before", state);
        console.log("after", { ...state, text: action.payload });
        return { ...state, text: action.payload };
    }
    return { ...state, ...action.payload };
}
