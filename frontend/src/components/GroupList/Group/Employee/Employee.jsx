import React from 'react';
import {Card, Picture, Name, Age, District, Department} from './StyledElements'

export default function Employee(props){
  return<Card>
    <Picture src={props.picutre}/>
    <Name>{props.name}</Name>
    <Age>{props.age}</Age>
    <District>{props.district}</District>
    <Department>{props.department}</Department>
  </Card>;
}