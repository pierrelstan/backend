const mongoose = require('mongoose');

const  RecipeShema = mongoose.Schema({
    title : { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions : { type: String, required: true },
    difficulty: { type: Number, required: true },
    time : { type: Number, required: true },
    id: { type:String, required: false}
});


module.exports =  mongoose.model('Recipe', RecipeShema);