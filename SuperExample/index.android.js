/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app';

const index = () => <App />;

export default index;

AppRegistry.registerComponent('SuperExample', () => index);
