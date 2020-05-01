'use strict';
const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'user',
  host: 'database',
  database: 'integrator',
  password: 'password12345',
  port: 5432,
})


const isTheSameDistrict = (group, employee) => {
  for(let other of group)
  {
    if(other.district === employee.district) return true;
  }
  return false;
}

const isTheSameDepartment = (group, employee) => {
  for(let other of group)
  {
    if(other.department === employee.department) return true;
  }
  return false;
}

const isTheSameAge = (group, employee) => {
  for(let other of group)
  {
    if(other.age === employee.age) return true;
  }
  return false;
}

const hasGroupFreePlace = (group, size) => {
  return group.length < size;
}

const isGroupAvailable = (group, size, employee) => {
  const chance = Math.random() < 0.5;
  return hasGroupFreePlace(group, size) && !isTheSameDepartment(group, employee) && !isTheSameDistrict(group, employee) && (!isTheSameAge(group, employee) || chance);
}

const createEmptyGroups = (numOfGroups) => {
  const groups = [];
  for(let i = 0; i < numOfGroups;i++) {
    groups.push([])
  };
  return groups
}



const formGroups = (list, size) => {
  const numOfGroups = Math.ceil(list.length / size);

  const groups = createEmptyGroups(numOfGroups)

  const cantEnplace = [];
  while(list.length > 0) {
    let nextToPlace = list.pop();
    let canBeEnplaced = false;
    for(let group of groups) {
      if(isGroupAvailable(group, size, nextToPlace)) {
        group.push(nextToPlace);
        canBeEnplaced = true;
        break;
      }
    }
    if(!canBeEnplaced) {
      cantEnplace.push(nextToPlace);
    }
  }

  while(cantEnplace.length > 0) {
    let nextToPlace = cantEnplace.pop();

    for(let group of groups) {
      if(hasGroupFreePlace(group, size)) {
        group.push(nextToPlace);
        break;
      }
    }
  }

  return groups;
}

const app = express();
app.use(cors());



app.get('/employees/:size', (request, response) => {
  pool.query('SELECT * FROM EMPLOYEES;', (error, results) => {
    if (error) {
      response.status(400).json({ info: `Error` });
    }
    
    const groups = formGroups(results.rows, request.params.size);

    response.status(200).json(groups)
  })
});

const PORT = 3000;
const HOST = 'backend';
app.listen(PORT, HOST);