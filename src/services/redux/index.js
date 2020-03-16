import {combineReducers} from 'redux';

// Reducers
import MainReducer from 'modules/main/MainReducer';
import LoadingReducer from 'services/redux/loading/LoadingReducer';
import RegisterReducer from '../../modules/register/RegisterReducer';
import LoginReducer from '../../modules/login/LoginReducer';

const reducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    MainReducer,
    LoadingReducer,
});

const rootReducer = (state, action) => {

    if (action.type === 'RESET_STATE') {
        this.state = undefined;
    }

    return reducer(state, action);
};

export default rootReducer;
