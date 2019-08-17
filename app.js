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


// create a recipe
app.post('/api/recipes',(req,res,next)=> {
  const recipe = new Recipe({
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      difficulty: req.body.difficulty,
      time: req.body.time,
      _id: req.body.id
  });

  recipe.save().then(()=> {
 res.status(201).json({
  message: 'Post saved successfully !'
 })
  }).catch((error)=> {
      res.status(404).json({
        error: error
      })
    })
})


 // return one recipe
app.get('/api/recipes/:id',(req, res, next)=>{
  Recipe.findOne({
    _id: req.params.id
  }).then((recipe)=>{
  res.status(200).json(recipe);
  }).catch((error)=> {
    res.status(404).json({
      error: error
    })
  })
  });


// Edit  a recipe
  app.put('/api/recipes/:id',(req, res, next)=> {
      const recipe = new Recipe({
        _id: req.params.id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time,
      });
      Recipe.updateOne({_id:req.params.id}, recipe).then(()=>{
        res.status(201).json({
          message: "Thing Update successfully!"
        });
      }).catch((error)=> {
      res.status(400).json({
        error:error
      });
      });
      });

// delete a recipe

      app.delete('/api/recipes/:id', (req, res, next)=>{
          Recipe.deleteOne({
          _id:req.params.id
          }).then(()=> {
            res.status(200).json({
              message: "Deleted!"
            });
          }).catch((error)=> {
          res.status(400).json({
            error:error
          });
          });
          });

// retuRN All recipes
app.use('/api/recipes', (req, res, next)=> {
  Recipe.find().then((recipe)=> {
 res.status(200).json(recipe)
  }).catch((error)=> {
 error:error
  });
 });



module.exports = app;