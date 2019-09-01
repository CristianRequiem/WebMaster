const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    first_name : String,
    last_name : String,
    user_name : String,
    email : String,
    password : String,
    user_type : String
});

module.exports = mongoose.model('users', userSchema);