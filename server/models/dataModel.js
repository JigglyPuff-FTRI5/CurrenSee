const { Pool } = require("pg");
const myURI = 'postgres://axsinapw:a_YndZQG1I2wXkQINs1O7pwjSQX7-cDn@castor.db.elephantsql.com/axsinapw';

const pool = new Pool({
  connectionString: myURI,
});


const URI = process.env.PG_URI || myURI;


module.exports = {
  query: function (queryString, params, callback) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};
