import React, {useState, useEffect} from 'react';
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

    try {
      let x = document.location.hostname;
      const uri = `http://${x}:3000/employees/`;
      let response = await fetch(uri + quantity);
      let data = await response.json();
      setEmployees(data);
    } 
    catch(error) {
      console.log(error);
    }
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
