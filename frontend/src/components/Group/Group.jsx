import React from 'react';
import Employee from 'components/Employee';
import {GroupContainer, GroupHeader} from './StyledElements';
import PropTypes from 'prop-types';

function Group(props){
  return <React.Fragment>
    <GroupContainer>
      <GroupHeader>Grupa {props.number}</GroupHeader>
      {props.employees.map((employeeData, index) => <Employee key={index} employee={employeeData}/>)}
    </GroupContainer>
  </React.Fragment>;
}

Group.propTypes = {
  number: PropTypes.number.isRequired,
  employees: PropTypes.array.isRequired
}

export default Group;