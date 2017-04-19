import React from 'react';
import { ScrollView, Text } from 'react-native';

const component = () => (
  <ScrollView>
    <Text style={{ fontSize: 20 }}>
      Sweet Form Bro
    </Text>
  </ScrollView>
);

component.navigationOptions = {
  title: 'Formy Formperson',
};

export default component;
