const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const dbdetails = require('./server/dbconnection')
app.use(cors());
app.use(bodyParser());

app.get('/getrestraunts/:item?',(req, res) => {
   dbdetails.dbstore(req.query.region).then((result)=>{res.json(result)});
})
app.post('/addrestraunts', (req, res) => {
  dbdetails.dbcreate(req.body).then((result)=>{res.send(result)});
})
app.get('/getmenudetails', (req, res) => {
  dbdetails.getMenuDetails().then((result)=>{res.json(result)});
})
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})