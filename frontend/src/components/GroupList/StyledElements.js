import styled from 'styled-components';

export let List = styled.ul`
  list-style: none;

`;

export let BackButton = styled.button`
  position: fixed;
  top: 0 ;
  right: 0;
  margin-right:15px;
  transform: translateX(100);
  font-weight: 700;
  font-size: 1.1em;
  background-color: #03e008;
  color: white;
  margin-top: 20px;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 1px 1px 1px #03c008;
  &:focus{
    box-shadow: none;
    outline: none;
  }
`;