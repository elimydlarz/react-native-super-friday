import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';

const app = StackNavigator({
  Home: { screen: Home },
});

export default app;

AppRegistry.registerComponent('SuperExample', () => app);
