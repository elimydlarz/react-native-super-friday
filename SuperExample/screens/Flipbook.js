import React from 'react';
// import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Selfie from '../components/Selfie';

import photo from '../images/undertaker.jpg';

const component = () => (
  <Swiper showsButtons>
    <Selfie name="a" size={300} source={photo} />
    <Selfie name="b" size={300} source={photo} />
    <Selfie name="c" size={300} source={photo} />
    <Selfie name="d" size={300} source={photo} />
    <Selfie name="e" size={300} source={photo} />
  </Swiper>
);

component.navigationOptions = { title: 'Flipbook' };

export default component;
