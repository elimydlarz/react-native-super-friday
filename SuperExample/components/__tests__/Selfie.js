import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Selfie from '../Selfie';

test('Selfie matches snapshot', () => {
  const tree = renderer.create(
    <Selfie source={{ uri: 'example' }} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
