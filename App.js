/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from './src/services/redux/store';
import RouterComponent from './src/services/navigation/Router';

const {persistor, store} = configureStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={false}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <RouterComponent/>
            </SafeAreaView>
          </PersistGate>
        </Provider>
    );
  }
}

export default App;
