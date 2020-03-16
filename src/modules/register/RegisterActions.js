import {setLoadingDefault} from '../../services/redux/loading/LoadingActions';
import {postRegister} from '../../services/api/Api';

export const setState = (type, payload) => (dispatch) => {
    dispatch({
        type: type,
        payload: payload
    })
};

export const apiRegister = () => async (dispatch) => {
  await setLoadingDefault(true);

  await dispatch(
      postRegister(
      (error) => {console.log(error)},
      (response) => console.log(response)
      )
  );

  await setLoadingDefault(false);
};
