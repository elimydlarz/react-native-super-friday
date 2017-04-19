import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Field from '../Field';

test('Field', () => {
  const tree = renderer.create(
    <Field
      updater={() => {}}
      label="label"
      value="value"
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
