const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userTypeSchema = new schema({
    user_type : String,
    description : String
});

module.exports = mongoose.model('user_types', userTypeSchema);