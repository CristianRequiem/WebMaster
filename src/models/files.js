const mongoose = require('mongoose');
const schema = mongoose.Schema;

const fileSchema = new schema({
    name: String,
    description: String,
    file_type: String,
    file_path: String,
    shortcut: String
});

module.exports = mongoose.model('files', fileSchema);