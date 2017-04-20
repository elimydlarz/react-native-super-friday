import React, { Component } from 'react';
import { View, Image, Button, AsyncStorage } from 'react-native';

const COLOURS = {
  NEUTRAL: 'black',
  LIKED: 'green',
  DISLIKED: 'red',
};

export default class component extends Component {
  constructor(props) {
    super(props);

    this.loadVote = this.loadVote.bind(this);
    this.saveVote = this.saveVote.bind(this);

    this.loadVote();
  }

  state = {
    vote: 'NEUTRAL',
  }

  async loadVote() {
    const vote = await AsyncStorage.getItem(`@super-friday:${this.props.name}`);
    this.setState({ vote });
  }

  async saveVote(vote) {
    await AsyncStorage.setItem(`@super-friday:${this.props.name}`, vote);
    this.setState({ vote });
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
            onPress={() => this.saveVote('LIKED')}
          />
          <Button
            color={COLOURS.DISLIKED}
            title="-"
            onPress={() => this.saveVote('DISLIKED')}
          />
        </View>
      </View>
    );
  }
}
