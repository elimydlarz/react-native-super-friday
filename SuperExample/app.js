import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Form from './screens/Form';

const app = StackNavigator({
  Home: { screen: Home },
  Form: { screen: Form },
});

AppRegistry.registerComponent('SuperExample', () => app);
