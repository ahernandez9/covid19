import {Types} from './UserTypes';

export const setAccessToken = (token) => async(dispatch) => {
    dispatch({
        type: Types.SET_TOKEN,
        payload: token
    });
};
