import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
      <View>
        <Text style={{ fontSize: 20, padding: 10 }}>
          {this.nameEntered()
            ? `Hello ${this.state.name}!`
            : 'Hey there Chump!'}
        </Text>
        <Field
          label="Please enter your name"
          updater={value => this.setState({ name: value })}
          value={this.state.name}
        />
        <Field
          label="Please enter your number"
          updater={value => this.setState({ number: value })}
          value={this.state.number}
        />
        <Field
          label="Please enter your address"
          updater={value => this.setState({ address: value })}
          value={this.state.address}
        />
        <Field
          label="Please enter your email"
          updater={value => this.setState({ email: value })}
          value={this.state.email}
        />
        <Field
          label="Please enter your post code"
          updater={value => this.setState({ postCode: value })}
          value={this.state.postCode}
        />
        <Field
          label="Please enter your dad's name"
          updater={value => this.setState({ dadsName: value })}
          value={this.state.dadsName}
        />
        <Field
          label="Please enter your dad's dad's name"
          updater={value => this.setState({ dadsDadsName: value })}
          value={this.state.dadsDadsName}
        />
        <Field
          label="Please enter your dad's dad's dad's name"
          updater={value => this.setState({ dadsDadsDadsName: value })}
          value={this.state.dadsDadsDadsName}
        />
        <Field
          label="Please enter your dad's dad's dad's dad's dad's name"
          updater={value => this.setState({ dadsDadsDadsDadsName: value })}
          value={this.state.dadsDadsDadsDadsName}
        />
        <Field
          label="Please enter your dad's dad's dad's dad's dad's dad's name"
          updater={value => this.setState({ dadsDadsDadsDadsDadsName: value })}
          value={this.state.dadsDadsDadsDadsDadsName}
        />
        <Field
          label="Please enter your dad's dad's dad's dad's dad's dad's dad's name"
          updater={value => this.setState({ dadsDadsDadsDadsDadsDadsName: value })}
          value={this.state.dadsDadsDadsDadsDadsDadsName}
        />
      </View>
    );
  }
}
