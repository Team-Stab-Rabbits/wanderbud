const { Pool } = require('pg');

// Local Database - Postgres
// const credentials = {
//   user: "postgres",
//   host: "localhost",
//   database: "wanderbud",
//   password: "pass",
//   port: 5432,
// };
// const pool = new Pool(credentials);

// Remote Database - ElephantSQL
const PG_URI = 'postgres://khqsrrmw:sVc-Z7JeRjcJO2WmT9kmAT5VPkAwZMvt@castor.db.elephantsql.com/khqsrrmw'
const pool = new Pool({connectionString: PG_URI});

module.exports = {
    query: (text, params, callback) => {
      console.log('Executed Query', text);
      return pool.query(text, params, callback);
    }
};
