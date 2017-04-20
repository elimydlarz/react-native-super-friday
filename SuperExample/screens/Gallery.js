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
    <Selfie name="a" source={photo} />
    <Selfie name="b" source={photo} />
    <Selfie name="c" source={photo} />
    <Selfie name="d" source={photo} />
    <Selfie name="e" source={photo} />
  </View>
);

component.navigationOptions = { title: 'Gallery' };

export default component;
