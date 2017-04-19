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

test('Field label', () => {
  const tree = renderer.create(
    <Field
      updater={() => {}}
      label="label"
      value="value"
    />,
  ).toJSON();
  const subject = tree.children.find(c => c.type === 'Text').children[0];

  expect(subject).toEqual('label');
});

test('Field updater', () => {
  const updater = jest.fn();
  const tree = renderer.create(
    <Field
      updater={updater}
      label="label"
      value="value"
    />,
  ).toJSON();
  const onChangeText = tree.children.find(c => c.type === 'TextInput').props.onChangeText;

  onChangeText('bananas');

  expect(updater).toBeCalledWith('bananas');
});
