import Transition from './Transition';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Transition component suite', () => {
  test('Render test', () => {
    let component = renderer.create(<Transition />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});