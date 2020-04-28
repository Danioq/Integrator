import React, {useState} from 'react';
import './App.css';
import NumberPicker from './components/NumberPicker'
import Transition from './components/Transition'
import GroupList from './components/GroupList'

export default function App() {
  const [employees, setEmployees] = useState();
  const [start, setStart] = useState(true);
  const [transition, setTransition] = useState(false);
  
  async function getEmployees(quantity) {
    setStart(false);
    setTransition(true);
    const uri = 'http://localhost:3000/employees/';
    let response = await fetch(uri + quantity);
    let data = await response.json();
    setEmployees(data);
  }

  if(start){
    return <NumberPicker getData={getEmployees}/>
  } else if(transition){
    return <Transition>{console.log(employees)}</Transition>
  } else {
    return <GroupList employees={employees}/>
  }
  ;

}
