import React from 'react';
import {Card, Picture, Name, Age, District, Department} from './StyledElements'

export default function Employee(props){
  return<Card>
    <Picture src={props.employee.picture}/>
    <Name>{`${props.employee.first_name} ${props.employee.last_name}`}</Name>
    <Age>Wiek<br/>{props.employee.age}</Age>
    <District>Dzielnica<br/> {props.employee.district}</District>
    <Department>Dział <br/> {props.employee.department}</Department>
  </Card>;
}