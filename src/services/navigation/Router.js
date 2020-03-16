import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Stack} from 'react-native-router-flux';

// Navigation
import NavBarMain from '../../services/navigation/NavBarMain';

// Resources
import {Style} from '../../resources/Style';
import Color from '../../resources/Color';
import Routing from '../../services/navigation/Routing';

// Views
import MainContainer from '../../modules/main/MainContainer'
import LoginContainer from '../../modules/login/LoginContainer';
import RegisterContainer from '../../modules/register/RegisterContainer';

const RouterComponent = () => {

    return (
        <Router style={styles.router}>
            <Stack key="root">

                {/*Login*/}
                <Scene
                    key={Routing.login}
                    navBar={NavBarMain}
                    component={LoginContainer}
                    title="Inicia sesión"
                />

                {/*Register*/}
                <Scene
                    initial
                    key={Routing.register}
                    navBar={NavBarMain}
                    component={RegisterContainer}
                    title="Regístrate"
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
        backgroundColor: Color.grey
    }
});

export default RouterComponent;
