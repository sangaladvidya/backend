const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    foodname:{
        type: String,
        required : true,
        trim: true
    },

    price:{
        type: Number,
        required:true,
        min:0
    },

    quantity:{
        type: Number,
        required:true,
        min:1
    },

    category:{
        type:String,
        required:true,
        enum:['veg','non-veg']
    }
});

module.exports = mongoose.model('cart',cartSchema);