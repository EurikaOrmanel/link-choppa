const mongoose = require('mongoose');

let link = new mongoose.Schema({
    original_url: {
        type: String,
        required: true,
        unique: true
    },
    short_url: {
        type: String,
        required: true,
        unique: true
    }
    ,
    clicks: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    mutated_at :{
        type:Date,
    }
});
module.exports.Links = mongoose.model('link',link);