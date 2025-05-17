const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    productname:{
        type: String,
        required: true,
        trim: true
    },
    discription:{
        type:String,
        require:true,
        enum:['Electronics', 'Clothing', 'Books', 'Other']
    },
    bought:{
        type:Date,
        default: Date.now,
    },
    ratings:{
        type:Number,
        required:true,
        enum:[1,2,3,4,5]
    },
    review:{
        type:String,
        required:true,
        enum:['poor','average','good','verygood','excellent']
    }
});
module.exports = mongoose.model('Review',ReviewSchema);