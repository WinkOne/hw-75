import axiosApi from "../axios-api";

export const FETCH_MESSAGE_REQUEST = 'FETCH_MESSAGE_REQUEST';
export const FETCH_MESSAGE_SUCCESS = "FETCH_COUNTER_SUCCESS";
export const FETCH_MESSAGE_ERROR = "FETCH_MESSAGE_ERROR";

export const fetchMessageRequest = () => {
    return {type: FETCH_MESSAGE_REQUEST};
};
export const fetchMessageSuccess = data => {
    return {type: FETCH_MESSAGE_SUCCESS, data};
};
export const fetchMessageError = () => {
    return {type: FETCH_MESSAGE_ERROR};
};

export const postMessage = dataMessage => {
    return async dispatch => {
        const data = await axiosApi.post('/message', dataMessage);
        dispatch(fetchMessageSuccess(data.data))
    }
};
export const encodeMessage = dataMessage => {
    return async dispatch => {
        const data = await axiosApi.post('/message/encode', dataMessage);
        console.log(data.data);
        dispatch(fetchMessageSuccess(data.data))
    }
};