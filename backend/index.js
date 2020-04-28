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

let formGroups = (list, size) => {
  let numOfGroups = Math.ceil(list.length / size);
  const groups = new Array(numOfGroups).fill([]);

  for(let group of groups) {
    group.push(list.pop());
  }

  // while(list.length > 0) {
  //   for(let group of groups) {
  //     if(group.length < 5)
  //     {
        
  //     }
  //     if(list.length == 0) break;
  //   }
  //   if(list.length == 0) break;
  // }

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