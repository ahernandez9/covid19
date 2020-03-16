import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Stack} from 'react-native-router-flux';

// Navigation
import {NavBarBack} from 'services/navigation/NavBarBack';
import NavBarMain from 'services/navigation/NavBarMain';

// Resources
import {Style} from 'resources/styles';
import Routing from 'services/navigation/Routing';

// Views
import MainContainer from 'modules/main/MainContainer'
import LoginContainer from '../../modules/login/LoginContainer';


const RouterComponent = () => {

    return (
        <Router style={styles.router}>
            <Stack key="root">

                {/*Login*/}
                <Scene
                    key={Routing.login}
                    initial
                    navBar={NavBarMain}
                    component={LoginContainer}
                    title="Inicia sesión"
                />

                {/*Register*/}
                <Scene
                    key={Routing.login}
                    initial
                    navBar={NavBarMain}
                    component={LoginContainer}
                    title="Inicia sesión"
                />

                {/*Main*/}
                <Scene
                    key={Routing.main}
                    navBar={NavBarMain}
                    component={MainContainer}
                    title="Explorar"
                />
            </Stack>
        </Router>
    );
};

const styles = StyleSheet.create({
    router: {
        flex: 1,
        backgroundColor: Color.white
    },
    labelStyle: {
        fontSize: Style.FONT_SIZE_SMALL_S,
        margin: 0,
    },
    tabBarStyle:{
        backgroundColor: Color.second,
        borderBottomWidth: 1,
        borderBottomColor: Color.second,
    },
    titleStyle: {
        fontSize: Style.FONT_SIZE_TITLE,
        color: Color.white,
        backgroundColor: Color.second,
        textAlign: 'left',
        // alignSelf: 'center'
    },
    titleStyleLegal: {
        fontSize: 20,
        textAlign: 'left'
    },
    navigationBarStyle: {
        height: Style.NAV_BAR_HEIGHT,
        backgroundColor: Color.second,
        borderBottomWidth: 0,
        //iOS -> Shadow
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //Android -> Shadow
        elevation: 0,
    }
});

export default RouterComponent;
