var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const encrypt = require('../helpers/encrypt')


var memeSchema = new Schema({
  toppers: {
      type:String
  },
  bottomers: {
    type:String,
  },
  url: {
    type:String
  } 
});

var Meme = mongoose.model('Meme', memeSchema);

module.exports=Meme