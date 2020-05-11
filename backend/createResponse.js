const {formGroups} = require('./createGroups');
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'user',
  host: 'database',
  database: 'integrator',
  password: 'password12345',
  port: 5432,
})

const createResponse = (request, response) => {
    pool.query('SELECT * FROM EMPLOYEES;', (error, results) => {
        if (error) {
        response.status(400).json({ info: `Error` });
        }
        
        const groups = formGroups(results.rows, request.params.size);

        response.status(200).json(groups)
        }
    )
};

module.exports = createResponse;