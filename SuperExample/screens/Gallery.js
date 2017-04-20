import React from 'react';
import {
  View,
} from 'react-native';

import photo from '../images/undertaker.jpg';
import Selfie from '../components/Selfie';

const component = () => (
  <View
    style={{
      padding: 10,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    <Selfie source={photo} />
    <Selfie source={photo} />
    <Selfie source={photo} />
    <Selfie source={photo} />
    <Selfie source={photo} />
  </View>
);

component.navigationOptions = { title: 'Gallery' };

export default component;
