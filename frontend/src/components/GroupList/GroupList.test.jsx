import GroupList from './GroupList';
import renderer from 'react-test-renderer';
import React from 'react';

describe('GroupList component suite', () => {
  test('Render test', () => {
    let component = renderer.create(<GroupList data={[]}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});