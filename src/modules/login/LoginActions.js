import {setLoadingDefault} from '../../services/redux/loading/LoadingActions';
import {postLogin} from '../../services/api/Api';
import {setSessionToken} from '../../services/redux/user/UserActions';
import Routing from '../../services/navigation/Routing';

export const setState = (type, payload) => (dispatch) => {
    dispatch({
        type: type,
        payload: payload
    })
};

export const apiLogin = () => async (dispatch) => {
    await setLoadingDefault(true);

    await dispatch(
        postLogin(
            (error) => {
                console.log(error);
            },
            (response) => {
                console.log(response);
                dispatch(setSessionToken(response));
                Routing.route(Routing.main);
            }
        )
    );

    await setLoadingDefault(false);
};
