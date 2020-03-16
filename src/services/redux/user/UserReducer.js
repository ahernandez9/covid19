import {Types} from './UserTypes';

const INITIAL_STATE = {
    accessToken: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        /** LOADING **/
        case Types.SET_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            };

        default:
            return state;
    }
};
