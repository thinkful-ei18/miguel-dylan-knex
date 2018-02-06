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

//
// knex
//   .count()
//   .from('restaurants')
//   .where({ cuisine: 'Thai' })
//   .then(results => console.log(results));
//
// knex
//   .count()
//   .from('restaurants')
//   .then((results) => console.log(results));
//-6
// knex
//   .count()
//   .from('restaurants')
//   .where({cuisine:'Thai',address_zipcode:'11372'})
//   .then((results) => console.log(results));
//

// knex
//   .select('name','id')
//   .from('restaurants')
//   .whereIn('address_zipcode',['10012','10013','10014'])
//   .orderBy('name','asc')
//   .limit(5)
//   .then((result) => console.log(result))

knex('restaurants')
  .returning('name','id')
  .insert({name: 'Byte Cafe', borough: 'Brooklyn',cuisine:'coffee',address_building_number: '123',address_street: 'Atlantic Avenue',address_zipcode: '11231'})
  .then(console.log('done'));



// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});
