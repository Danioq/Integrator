import React from 'react';
import Employee from 'components/Employee'
import {GroupContainer, GroupHeader} from './StyledElements'


export default function Group(props){
  return <React.Fragment>
    <GroupContainer>
      <GroupHeader>Grupa {props.number}</GroupHeader>
      {props.employees.map((employeeData, index) => <Employee key={index} employee={employeeData}/>)}
    </GroupContainer>
  </React.Fragment>;
}