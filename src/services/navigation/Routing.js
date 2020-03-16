import { Actions } from 'react-native-router-flux';

export default class Routing {

    /** **** **/
    /** Main **/
    /** **** **/
    static main      = 'MainContainer';

    /** ***** **/
    /** Login **/
    /** ***** **/
    static login     = 'LoginContainer';

    /** ***** **/
    /** Register **/
    /** ***** **/
    static register  = 'RegisterContainer';

    /** ******* **/
    /** Methods **/
    /** ******* **/
    static currentScene = () => {
        return Actions.currentScene;
    };

    static drawerClose = () => {
        Actions.drawerClose();
    };

    static drawerOpen = () => {
        Actions.drawerOpen();
    };

    static pop = (params) => {
        Actions.pop(params);
    };

    static popTo = (key, params) => {
        Actions.popTo(key, params)
    };

    static refresh = (params) => {
        if (params) {
            Actions.refresh(params);
            return;
        }

        Actions.refresh({ key: Actions.currentScene });
    };

    static route = (key, params) => {
        Actions[key](params);
    };
}
