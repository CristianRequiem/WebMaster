const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pageSchema = new schema({
    title : String,
    description : String,
    url : String,
    active : Boolean,
    html: String,
    css : String,
    js : String,
    page_type : String
});

module.exports = mongoose.model('pages', pageSchema);