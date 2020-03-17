import {Types} from './UserTypes';

export const setSessionToken = (response) => async(dispatch) => {
    const token = response && response.sessionToken ? response.sessionToken : '';
    dispatch({
        type: Types.SET_TOKEN,
        payload: token
    });
};

