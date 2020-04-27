import React, {useEffect} from 'react';
import styled from 'styled-components';

let Main = styled.main`
  margin: auto;
  padding: 20px;
`;

export default function NumberPicker(props) {
  const getData = props.getData;
  let actualValue = (event) => {
    document.getElementById('value').innerHTML = event.target.value;
  }
  let handleClick = (event) => {
    event.preventDefault();
    const value = document.getElementById('quantity').value;
    getData(value);
  }
  useEffect(() => {
    document.getElementById('value').innerHTML = document.getElementById('quantity').value;
  }, [])

  return <Main>
    <p id='value'></p>
    <form>
      <label htmlFor="quantity">Wielkość Grupy</label>
      <input type="range" id='quantity' name="quantity" min="2" max="5" onInput={actualValue} />
      <input type="submit" value="Wybierz" onClick={handleClick} />
    </form>
  </Main>
}