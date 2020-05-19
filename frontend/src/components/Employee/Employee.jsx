import React from 'react';
import {Card, Picture, Name, Age, District, Department} from './StyledElements'
import PropTypes from 'prop-types';

function Employee(props){
  return<Card>
    <Picture src={props.employee.picture}/>
    <Name>{`${props.employee.first_name} ${props.employee.last_name}`}</Name>
    <Age>Wiek<br/>{props.employee.age}</Age>
    <District>Dzielnica<br/> {props.employee.district}</District>
    <Department>Dział <br/> {props.employee.department}</Department>
  </Card>;
}

Employee.propTypes = {
  employee : PropTypes.shape({
    picture: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    district: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
  })
};
export default Employee;