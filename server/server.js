const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const PORT = 5000;
const Pool = pg.Pool;

const pool = new Pool({
  database: 'shoe_store',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
})

pool.on('connect', () => {
  console.log('Postgresql connected');
})

pool.on('error', (error) => {
  console.log('Error with postgres pool', error)
})

const shoeList = [
  { name: 'nike tennis shoe', cost: '100' },
  { name: 'adidas tennis shoe', cost: '99' }
]

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('up and running on port', PORT);
})

app.post('/shoe', (req, res) => {
  const shoe = req.body;
  pool.query(`
    INSERT INTO "shoes" ("name", "cost")
    VALUES ($1, $2);`, [shoe.name, shoe.cost])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error on post:', error);
      res.sendStatus(500);
    })
})

app.get('/shoe', (req, res) => {
  pool.query(`
    SELECT * 
    FROM "shoes"
  `)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('error on get:', error);
      res.sendStatus(500);
    })
})