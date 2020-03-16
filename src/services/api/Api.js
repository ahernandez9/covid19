import {launchAsyncTask} from "./ApiServices";
import {Types, Verbs} from './ApiTypes';

/** *** **/
/** GET **/
/** *** **/
export const getFilms = (callbackError, callbackSuccess) => async(dispatch, getState) => {
    let url    = `/api/delete_goal/${goalId}`;
    let params = null;
    let config = {
        headers: {
            'Authorization': 'Bearer '+ accessToken,
            'Content-Type':  'application/json'
        }
    };

    const currentFunction      = getFilms(callbackError, callbackSuccess);
    const currentFunctionProps = {tag: Types.POST_LOGIN, verb: Verbs.GET, url, config, params, callbackError, callbackSuccess};
    return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

/** *** **/
/** POST **/
/** *** **/
export const postLogin = (callbackError, callbackSuccess) => async(dispatch, getState) => {
    let url    = `/LogInServlet`;
    let params = {
        email: "",
        password: ""
    };
    // let config = {
    //     headers: {
    //         'Authorization': 'Bearer '+ accessToken,
    //         'Content-Type':  'application/json'
    //     }
    // };

    const currentFunction      = postLogin(callbackError, callbackSuccess);
    const currentFunctionProps = {tag: Types.POST_LOGIN, verb: Verbs.POST, url, config, params, callbackError, callbackSuccess};
    return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};
