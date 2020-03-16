export const setState = (type, payload) => (dispatch) => {
    dispatch({
        type: type,
        payload: payload
    })
};
