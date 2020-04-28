import React from 'react';
import Group from './Group';
import {ListsContainer} from './StyledElements';

export default function GroupList(props) {
  return <ListsContainer>
    {props.data.map(element => <Group data={element} />)}
  </ListsContainer>
}