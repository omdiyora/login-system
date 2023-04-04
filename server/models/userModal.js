const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nane:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type: Number,
        default: 0  //0. user , 1. admin
    }
},
{versionKey: false}
)

const users = new mongoose.model('Users',userSchema)
module.exports = users