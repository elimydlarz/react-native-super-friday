import React, { Component } from 'react';
import { RefreshControl, ScrollView, Text, View, Button } from 'react-native';
import Swiper from 'react-native-swiper';

import Field from '../components/Field';

export default class extends Component {
  static navigationOptions = {
    title: 'Form',
  }

  constructor() {
    super();

    this.state = {
      name: '',
      refreshing: false,
      refreshCounter: 0,
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  onRefresh() {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false, refreshCounter: this.state.refreshCounter + 1 });
    }, 1000);
  }

  nameEntered() {
    return this.state.name.length > 0;
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        <Swiper height={500}>
          <View>
            <Text>
              Refreshed {this.state.refreshCounter} times
            </Text>
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
              inputStyle={{ borderColor: 'red' }}
              label="Please enter your number"
              updater={value => this.setState({ number: value })}
              value={this.state.number}
            />
          </View>
          <View style={{ flex: 100, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Button
              style={{ flex: 50 }}
              title="Fairly Big Button"
              onPress={() => {}}
            />
            <Button
              style={{ flex: 50 }}
              title="Another Big Button"
              onPress={() => {}}
            />
            <Button
              style={{ flex: 50 }}
              title="Yet Another Big Button"
              onPress={() => {}}
            />
            <Button
              style={{ flex: 50 }}
              title="Final Big Button"
              onPress={() => {}}
            />
          </View>
        </Swiper>
      </ScrollView>
    );
  }
}
