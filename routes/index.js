const express = require('express');
const router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('companies')
  .select(['id', 'name', 'hint'])
  .then((rows) => res.json(rows))
})

module.exports = router
