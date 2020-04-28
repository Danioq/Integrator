import React from 'react';
import Employee from './Employee'
import {GroupContainer} from './StyledElements'


export default function Group(props){
  return <GroupContainer>
    {props.employees.map(employeeData => <Employee employee={employeeData}/>)}
  </GroupContainer>;
    ;
}