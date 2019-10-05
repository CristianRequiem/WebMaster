const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new schema({
    local: {
        first_name : String,
        last_name : String,
        user_name : String,
        email : String,
        password : String,
        user_type : String
    }
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('users', userSchema);