import React from 'react';
import Group from 'components/Group';
import {List, BackButton} from './StyledElements';

export default function GroupList(props) {
  
  let handleClick = () => {
    window.location.reload(false);
  }
  
  return <React.Fragment>
    <BackButton onClick={handleClick}>Powrót</BackButton>
    <List>
      {props.data.map((element, index) => <li key={index} ><Group number={index} employees={element} /></li>)}
    </List>
  </React.Fragment>
}