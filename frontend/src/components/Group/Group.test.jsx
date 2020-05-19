import Group from './Group';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Group component suite', () => {
  test('Render test', () => {
    let component = renderer.create(<Group employees={[]} number={1}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});