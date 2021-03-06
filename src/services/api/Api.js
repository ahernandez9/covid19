import {launchAsyncTask} from "./ApiServices";
import {Types, Verbs} from './ApiTypes';
import {stringify} from 'qs';

/** *** **/
/** GET **/
/** *** **/
// export const getFilms = (callbackError, callbackSuccess) => async(dispatch, getState) => {
//     let url    = `/api/delete_goal/${goalId}`;
//     let params = null;
//     let config = {
//         headers: {
//             'Authorization': 'Bearer '+ accessToken,
//             'Content-Type':  'application/json'
//         }
//     };
//
//     const currentFunction      = getFilms(callbackError, callbackSuccess);
//     const currentFunctionProps = {tag: Types.POST_LOGIN, verb: Verbs.GET, url, config, params, callbackError, callbackSuccess};
//     return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
// };

/** *** **/
/** POST **/
/** *** **/
export const postLogin = (callbackError, callbackSuccess) => async(dispatch, getState) => {
    let url    = `/LogInServlet`;
    let params = {
        email: 'albertohr1998@gmail.com',
        password: '123456'
    };
    params = stringify(params);
    let config = {
        headers: {
            // 'Authorization': 'Bearer '+ accessToken,
            'Content-Type':  'application/x-www-form-urlencoded'
        }
    };

    const currentFunction      = postLogin(callbackError, callbackSuccess);
    const currentFunctionProps = {tag: Types.POST_LOGIN, verb: Verbs.POST, url, config, params, callbackError, callbackSuccess};
    return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

export const postRegister = (callbackError, callbackSuccess) => async(dispatch, getState) => {
    let url    = `/RegisterServlet`;
    let params = {
        email: 'albertohr1998@gmail.com',
        password: '123456'
    };
    params = stringify(params);
    let config = {
        headers: {
        //     'Authorization': 'Bearer '+ accessToken,
            'Content-Type':  'application/x-www-form-urlencoded'
        }
    };

    const currentFunction      = postRegister(callbackError, callbackSuccess);
    const currentFunctionProps = {tag: Types.POST_REGISTER, verb: Verbs.POST, url, config, params, callbackError, callbackSuccess};
    return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};
