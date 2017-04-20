import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Gallery from './screens/Gallery';

const app = StackNavigator({
  Home: { screen: Home },
  Gallery: { screen: Gallery },
});

export default app;

AppRegistry.registerComponent('SuperExample', () => app);
