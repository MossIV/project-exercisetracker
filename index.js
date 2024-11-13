const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO)

var userSchema = new mongoose.Schema({
  username: String,
})

var exerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: Date,
  _id: String
})

var logSchema = new mongoose.Schema({
    username: String,
    count: Number,
    _id: String,
    log: [{
      description: String,
      duration: Number,
      date: Date,
    }]
})

var User = mongoose.model("User",userSchema);
var Exercise = mongoose.model("Exercise",exerciseSchema);
var Log = mongoose.model("Log",logSchema);

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

//create new user
app.post("/api/users", function(req, res){

})

//get list of users
app.get("/api/users", function(req, res){

})

//logging exercise
app.post("/api/users/:_id/exercises", function(req, res){

})

//get a full log of a user
app.get("/api/users/:_id/logs", function(req, res){

})



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
