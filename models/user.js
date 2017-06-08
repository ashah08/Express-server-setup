const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Model definition
const userScehma = new Schema({
  email: {type:String, unique: true, lowercase: true},
  password: String
})


// create model class
const ModelClass = mongoose.model('user', userScehma)

// Export Class
module.exports = ModelClass;
