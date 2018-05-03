const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
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

router.put('/', (req, res) => {
  const shoe = req.body;
  pool.query(`
      UPDATE "shoes"
      SET "name" = $1, "cost" = $2
      WHERE "id" = $3
  `, [shoe.name, shoe.cost, shoe.id])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error on put', error);
      res.sendStatus(500);
    })
})

router.delete('/', (req, res) => {
  const shoe = req.query;
  pool.query(`
    DELETE FROM "shoes"
    WHERE "id" = $1
  `, [shoe.id])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error on delete', error);
      res.sendStatus(500);
    })

})

module.exports = router;