'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .then(results => console.log(JSON.stringify(results)));

// knex
//   .select()
//   .from('restaurants')
//   .where({cuisine: 'Italian'})
//   .then(results => console.log(JSON.stringify(results)));


// knex
//   .select()
//   .from('restaurants')
//   .where({ cuisine: 'Italian' })
//   .limit(10)
//   .then(results => console.log(results));


knex
  .count()
  .from('restaurants')
  .where({ cuisine: 'Thai' })
  .then(results => console.log(results));

// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});