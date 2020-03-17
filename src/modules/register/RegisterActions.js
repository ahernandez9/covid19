import {setLoadingDefault} from '../../services/redux/loading/LoadingActions';
import {postRegister} from '../../services/api/Api';
import {DialogManager} from '../../services/DialogManager';

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
      (error) => {
          console.log(error);
          DialogManager.singleAlert("Email already exists")
      },
      (response) => {
          console.log(response)
      }
      )
  );

  await setLoadingDefault(false);
};
