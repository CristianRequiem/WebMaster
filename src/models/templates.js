const mongoose = require('mongoose');
const schema = mongoose.Schema;

const templateSchema = new schema({
    name : String,
    description : String,
    css : String,
    js : String,
    images : Array
});

module.exports = mongoose.model('templates', templateSchema);