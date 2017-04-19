/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import app from './app';

const index = () => <App />;

export default index;

AppRegistry.registerComponent('SuperExample', () => index);
