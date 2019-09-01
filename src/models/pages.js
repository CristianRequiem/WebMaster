const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pageSchema = new schema({
    title : String,
    description : String,
    favicon : String,
    logo : String,
    header : String,
    footer : String,
    key_words : Array,
    url : String,
    active : Boolean,
    css : String,
    js : String,
    page_type : String
});

module.exports = mongoose.model('pages', pageSchema);