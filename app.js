// MONGO DB PW Lb5P2JgJLPg2NBSt
// MONGO DB CONNECTION : mongodb+srv://Stanley:Lb5P2JgJLPg2NBSt@cluster0-au8xd.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors())
app.options('*', cors())


app.use(bodyParser.json());



const Recipe = require('./models/recipe');

mongoose.connect('mongodb+srv://Stanley:Lb5P2JgJLPg2NBSt@cluster0-au8xd.mongodb.net/test?retryWrites=true&w=majority')
.then(()=> {
console.log('successfully connected to MONGODB Atlas')
})
.catch((error)=> {
console.log("Unable to connect to Mongo DB Atlas")
console.log(error)
})




module.exports = app;