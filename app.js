const express = require('express')
const app = express()
const index = require('./routes/index')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({
  extended: true
}))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyParser.json())
app.use(express.static(path.join('.')))

const port = process.env.PORT || 3000

app.use('/',index)

app.listen(port, () => {
  console.log('Listening on port', port)
})

module.exports = app;
