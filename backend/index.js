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


let isTheSameDistrict = (group, employee) => {
  for(let other of group)
  {
    if(other.district === employee.district) return true;
  }
  return false;
}

function isTheSameDepartment (group, employee) {
  for(let other of group)
  {
    if(other.department === employee.department) return true;
  }
  return false;
}

function isTheSameAge (group, employee) {
  for(let other of group)
  {
    if(other.age === employee.age) return true;
  }
  return false;
}

function isGroupAvailable (group, size, employee) {
  let chance = Math.random() < 0.5;
  return group.length < size && !isTheSameDepartment(group, employee) && !isTheSameDistrict(group, employee) && (!isTheSameAge(group, employee) || chance);
}
let formGroups = (list, size) => {
  const numOfGroups = Math.ceil(list.length / size);

  let groups = [];
  for(let i = 0; i < numOfGroups;i++)
  {groups.push([])};
  // let groups = new Array(numOfGroups).fill(new Array());

  let cantEnplace = [];
  while(list.length > 0) {
    let nextToPlace = list.shift();
    let canBeEnplaced = false;
    for(let group of groups)
    {
      if(isGroupAvailable(group, size, nextToPlace))
      {
        group.push(nextToPlace);
        canBeEnplaced = true;
        break;
      }
    }
    if(!canBeEnplaced)
    {
      cantEnplace.push(nextToPlace);
    }
  }
  console.log(cantEnplace.length);

  while(cantEnplace.length > 0)
  {
    let nextToPlace = cantEnplace.shift();
    for(let group of groups)
    {
      if(group.length < size)
      {
        group.push(nextToPlace);
        break;
      }
    }
  }

  console.log(cantEnplace.length);
  console.log('ended')
  return groups;
}

const app = express();
app.use(cors());
app.get('/employees/:size', (request, response) => {
  pool.query('SELECT * FROM EMPLOYEES;', (error, results) => {
    if (error) {
      response.status(400).json({ info: `Error` });
      throw error;
    }
    
    let groups = formGroups(results.rows, request.params.size);
    response.status(200).json(groups)
  })
});

const PORT = 3000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);