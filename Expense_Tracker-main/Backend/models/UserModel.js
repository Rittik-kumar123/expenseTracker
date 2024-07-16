const mongoose = require('mongoose');

const UsesrSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim : true,
        maxLength : 50
    },
    email:{
        type:String,
        required: true,
        maxLength:50,
        trim:true
    },
    password:{
        type:String,
        required : true,
    },
},{timestamps:true})

module.exports = mongoose.model('User',UsesrSchema)