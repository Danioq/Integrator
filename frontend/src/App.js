import React, {useState, useEffect} from 'react';
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
    const uri = 'http://192.168.1.133:3000/employees/';
    let response = await fetch(uri + quantity);
    let data = await response.json();
    setEmployees(data);
  }

  useEffect(() => {setTransition(false);}, [employees])

  
  if(start){
    return <NumberPicker getData={getEmployees}/>
  } else if(transition){
    return <Transition />
  } else {
    return <GroupList backHandle={setStart} data={employees}/>
  }
}
