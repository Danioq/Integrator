import React from 'react';
import Group from 'components/Group';
import {List, BackButton} from './StyledElements';
import PropTypes from 'prop-types';

function GroupList(props) {
  
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

GroupList.propTypes = {
  data: PropTypes.array.isRequired
}
export default GroupList;