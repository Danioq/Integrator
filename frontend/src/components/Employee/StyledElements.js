import styled from 'styled-components';

export let Card = styled.li`
  display: inline-block;
  align-items: center;
  margin: 10px;
  min-height: 30vh;
  width: 11vw;
  padding: 10px;
  text-align: center;
  border: 1px solid #03e008;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px #03b008;
  background-color: rgb(225, 242, 225);
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
    box-shadow: none;
  }
  @media (max-width: 600px) {
    width: 50vw;
  }
`;

export let Picture = styled.img`
  border-radius: 15px;
`;

export let Name = styled.p`
  font-weight: bolder;
  font-size: 1.1em;
  cursor: default;
`;

export let Age = styled.p`
cursor: default;
`;

export let District = styled.p`
cursor: default;
`;

export let Department = styled.p`
cursor: default;
`;