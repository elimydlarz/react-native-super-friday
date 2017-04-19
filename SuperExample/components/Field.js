import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 }}>{this.props.label}</Text>
        <TextInput
          style={{ height: 50, borderWidth: 1 }}
          onChangeText={value => this.setState({ value })}
          value={this.state.value}
        />
      </View>
    );
  }
}
