'use strict';
const express = require('express');
const cors = require('cors');

const createResponse = require('./createResponse');

const app = express();
app.use(cors());

app.get('/employees/:size', createResponse);

const PORT = 3000;
const HOST = 'backend';
app.listen(PORT, HOST);