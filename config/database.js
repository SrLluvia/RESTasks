const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//The pool is initially created empty and will create new clients lazily as they are needed
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

/*
Whenever the pool establishes a new client connection to the PostgreSQL backend 
it will emit the connect event with the newly connected client
*/
pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

/* 
query allows SQL querys to DB,
    text -> string with query
    params -> array to avoid sql injections
    example: const result = await db.query('SELECT * FROM tasks');
pool multiple DB connections 
*/
module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};