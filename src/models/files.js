const mongoose = require('mongoose');
const schema = mongoose.Schema;

const fileSchema = new schema({
    name : String,
    description : String,
    file_type : String,
    shortcut : String
});

module.exports = mongoose.model('files', fileSchema);