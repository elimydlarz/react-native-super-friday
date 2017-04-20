import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Flipbook from './screens/Flipbook';

const app = StackNavigator({
  Home: { screen: Home },
  Gallery: { screen: Gallery },
  Flipbook: { screen: Flipbook },
});

export default app;

AppRegistry.registerComponent('SuperExample', () => app);
