const {formGroups} = require('./createGroups');
const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER ?? 'user',
  host: 'database',
  database: process.env.POSTGRES_DB ?? 'integrator',
  password: process.env.POSTGRES_PASSWORD ?? 'password12345',
  port: process.env.DATABASE_PORT ?? '5432',
})

const createResponse = (request, response) => {
    pool.query('SELECT * FROM EMPLOYEES;', (error, results) => {
        if (error) {
        response.status(400).json({ info: error });
        }
        
        const groups = formGroups(results.rows, request.params.size);

        response.status(200).json(groups)
        }
    )
};

module.exports = createResponse;