import styled from 'styled-components';

export let Submit = styled.input.attrs(() =>({
  type: 'submit',
  value: 'Wybierz'
}))`
    display: block;
    margin-left: auto;
    margin-right: auto;
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

export let Slider = styled.input.attrs(() => ({
  type: 'range',
  id: 'quantity',
  name: 'quantiy', 
  min: '2',
  max: '5'
}))`
    width: 200px;
    height:30px;
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track {
      background: white;
      height:30px;
      border-radius: 15px;
      height: 30px
    }
    &::-moz-range-track {
      height: 100%;
      background: white;
      border-radius: 15px;
      height: 30px
    }
    &::-webkit-slider-thumb 
    {
      height: 30px;
      width: 30px;
      border-radius: 15px;
      border: none;
      margin: 0px;

      background-color: #03e008;
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      height: 30px;
      width: 30px;
      border-radius: 15px;
      border: none;
      background-color: #03e008;
      -webkit-appearance: none;
    }
`;

export let Label = styled.label.attrs(() => ({
  htmlFor: 'quantity',
}))`
  font-size: 2.5em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #03c008;
`;

export let Value = styled.p.attrs(() => ({
    id: 'value',
}))`
    font-size: 2.5em;
    color: #03c008;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
`;

export let Form = styled.form`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
  `;

export let Main = styled.div`
  height: 90vh;
  position: relative;
`;