const express = require('express');
const router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('companies').select(['id', 'name', 'hint'])
    .then((rows) => {
      const csv = rows.map(x => `${x.id}|${x.name}|${x.hint}`).join('\n')
      return res.send(csv)
    })
})

module.exports = router
