import {FETCH_MESSAGE_SUCCESS} from "./action";

const initialState = {
    message: []
};

const reducer = (state = initialState, action) => {
    if(action.type === FETCH_MESSAGE_SUCCESS){
        return {...state, message: action.data}
    }
    return state;
};

export default reducer;