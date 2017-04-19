import React, { Component } from 'react';
import { ScrollView, Text, TextInput } from 'react-native';

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
        <TextInput
          style={{ height: 50, borderWidth: 1 }}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Text style={{ fontSize: 20 }}>
          {this.nameEntered() && `Hello ${this.state.name}!`}
        </Text>
      </ScrollView>
    );
  }
}
