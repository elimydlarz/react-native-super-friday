import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Field from '../components/Field';

export default class extends Component {
  static navigationOptions = {
    title: 'Form',
  }

  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

  nameEntered() {
    return this.state.name.length > 0;
  }

  render() {
    return (
      <ScrollView>
        <Field label="Please enter your name" />
        <Text style={{ fontSize: 20 }}>
          {this.nameEntered()
            ? `Hello ${this.state.name}!`
            : 'Hey there Chump!'}
        </Text>
      </ScrollView>
    );
  }
}
