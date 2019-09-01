const mongoose = require('mongoose');
const schema = mongoose.Schema;

const rolSchema = new schema({
    name : String,
    description : String,
    pages : Array
});

module.exports = mongoose.model('rols', rolSchema);