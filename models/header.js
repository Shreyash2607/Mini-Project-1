const mongoose = require('mongoose')

const LinksSchema = new mongoose.Schema({
    title:{type:String},
    link:{type:String},
})

const ContactSchema = new mongoose.Schema({
    name:{type:String},
    mobileNumber:{type:String},
})

const socialLinksSchema = new mongoose.Schema({
    type:{type:String},
    link:{type:String},
})

const headerSchema = new mongoose.Schema({
    header:{
        title:{type:String},
        subtitle:{type:String}
    },
    footer:{
        footerInfo:{type:String},
        quickLinks:[LinksSchema],
        externalLinks:[LinksSchema],
    },
    contact:{
        contactPageInfo:{type:String},
        email:{type:String},
        website:{type:String},
        contact:[ContactSchema],
        socialLinks:[socialLinksSchema]
    }
})

module.exports = mongoose.models.header || mongoose.model('header',headerSchema)