import Employee from './Employee';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Employee component suite', () => {
  test('Render test', () => {
    let empData = {
      picture: "pic.png",
      first_name: "xyz",
      last_name: "nowak",
      age: 20,
      district: "krzyki",
      department: "IT"
    }
    let component = renderer.create(<Employee employee={empData} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});