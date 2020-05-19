import NumberPicker from './NumberPicker';
import renderer from 'react-test-renderer';
import React from 'react';

describe('NumberPicker component suite', () => {
  test('Render test', () => {
    let component = renderer.create(<NumberPicker getData={jest.fn()} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});