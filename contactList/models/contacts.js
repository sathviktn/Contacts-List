// schema for contacts

const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstName: {
        type : String,
        required : true
    },
    lastName: {
        type : String,
        required : false
    },
    address: {
        type : String,
        required : false
    },
    phone: {
        type : Number,
        required : true
    }
});

const contact = module.exports = mongoose.model('Contact', contactSchema);