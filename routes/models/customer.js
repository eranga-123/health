const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    birthday:{
        type : String,
        required : true
    },
    
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);