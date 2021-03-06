import React from 'react';
import {
  Button,
  View,
} from 'react-native';

const component = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Button
      title="Gallery"
      onPress={() => navigation.navigate('Gallery')}
    />
    <Button
      title="Flipbook"
      onPress={() => navigation.navigate('Flipbook')}
    />
  </View>
);

component.navigationOptions = { title: 'Home' };

export default component;
