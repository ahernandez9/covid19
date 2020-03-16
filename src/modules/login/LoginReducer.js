import {Types} from './LoginTypes';

const INITIAL_STATE = {
    state: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        /** SET STATE **/
        case Types.SET_STATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };

        default:
            return state;
    }
};
