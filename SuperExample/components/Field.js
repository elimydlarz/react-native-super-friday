import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default ({ updater, label, value }) => (
  <View>
    <Text style={{ fontSize: 18 }}>{label}</Text>
    <TextInput
      style={{ height: 50, borderWidth: 1 }}
      onChangeText={updater}
      value={value}
    />
  </View>
);
