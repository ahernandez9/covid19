import {setLoadingDefault} from '../../services/redux/loading/LoadingActions';
import {postLogin} from '../../services/api/Api';

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
            (error) => {console.log(error)},
            (response) => console.log(response)
        )
    );

    await setLoadingDefault(false);
};
