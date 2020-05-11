'use strict';
const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool
const {formGroups} = require('./createGroups')

const pool = new Pool({
  user: 'user',
  host: 'database',
  database: 'integrator',
  password: 'password12345',
  port: 5432,
})

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