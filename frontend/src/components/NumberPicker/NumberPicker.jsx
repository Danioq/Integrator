import React, {useEffect} from 'react';
import {Main, Label, Slider, Submit, Value, Form} from './StyledElements.js'


export default function NumberPicker(props) {
  const getData = props.getData;

  let actualizeValue = (event) => {
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
    <Form>
        <Label>Wielkość Grupy</Label>
        <Value/>
        <Slider onInput={actualizeValue} />
        <Submit onClick={handleClick} />
      </Form>
  </Main>;
}