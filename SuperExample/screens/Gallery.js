import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import photo from '../images/undertaker.jpg';

const component = () => (
  <View
    style={{
      padding: 10,
      flex: 9,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    <Image
      style={{ width: 100, height: 100, margin: 5 }}
      resizeMode="cover"
      source={photo}
    />
    <Image
      style={{ width: 100, height: 100, margin: 5 }}
      resizeMode="cover"
      source={photo}
    />
    <Image
      style={{ width: 100, height: 100, margin: 5 }}
      resizeMode="cover"
      source={photo}
    />
    <Image
      style={{ width: 100, height: 100, margin: 5 }}
      resizeMode="cover"
      source={photo}
    />
  </View>
);

component.navigationOptions = { title: 'Gallery' };

export default component;
