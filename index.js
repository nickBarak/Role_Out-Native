import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Context from './store/Context';

AppRegistry.registerComponent(appName, () => () => (
    <Context>
      <App />
    </Context>
));
