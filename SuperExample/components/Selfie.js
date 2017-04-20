import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';

const COLOURS = {
  NEUTRAL: 'black',
  LIKED: 'green',
  DISLIKED: 'red',
};

export default class component extends Component {
  state = {
    vote: 'NEUTRAL',
  }

  render() {
    const { source, size = 100 } = this.props;
    const borderColor = COLOURS[this.state.vote];

    return (
      <View style={{ alignSelf: 'center', margin: 5 }}>
        <Image
          style={{ borderColor, borderWidth: 2, width: size, height: size }}
          resizeMode="cover"
          source={source}
        />
        <View style={{ width: size, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            color={COLOURS.LIKED}
            title="+"
            onPress={() => this.setState({ vote: 'LIKED' })}
          />
          <Button
            color={COLOURS.DISLIKED}
            title="-"
            onPress={() => this.setState({ vote: 'DISLIKED' })}
          />
        </View>
      </View>
    );
  }
}
