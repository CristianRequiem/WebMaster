const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shortcutSchema = new schema({
    name : String,
    description: String,
    content : String
})

module.exports = mongoose.model('shortcuts', shortcutSchema);