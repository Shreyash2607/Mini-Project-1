const mongoose = require('mongoose')

const LinksSchema = new mongoose.Schema({
    id:{type:Number},
    text:{type:String},
    link:{type:String},
    new:{type:String}
})

const notificationSchema = new mongoose.Schema({
    data:{
        Links:[LinksSchema]
    }
})

module.exports = mongoose.model('notification',notificationSchema)