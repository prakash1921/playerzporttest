const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    name:{
        type:String,
        default:" "
    },
    age:{
        type:Number,
        default:0
    }
})
module.exports = mongoose.model('user',user);