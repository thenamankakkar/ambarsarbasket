const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let Course = new Schema({
    cId: {type: String},
    title: {type: String},
    fee: {type: Number},
    duration: {type: Number},
    desc: {type: String}
}, {
    "collection": "p_data"
});

Course.plugin(uniqueValidator, {message: "is already exits"});

module.exports = mongoose.model("p_data", Course);
