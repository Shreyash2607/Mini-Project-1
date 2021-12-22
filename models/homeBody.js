const mongoose = require('mongoose')

const homeBodySchema = new mongoose.Schema({
    data:{
        title:{type:String},
        subtitle:{type:String},
        subhead:{type:String},
        info:{
            para1:{type:String},
            para2:{type:String},
            para3:{type:String},
        },
        links:{
            publication:{type:String},
            support:{type:String},
            paperSubmission:{type:String},
        }
    }
})

module.exports = mongoose.model('homeBody',homeBodySchema)