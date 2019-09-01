const mongoose = require('mongoose');
const schema = mongoose.Schema;

const comentarySchema = new schema({
    author : String,
    post : String,
    content : String,
    date : Date
});

module.exports = mongoose.model('comentaries', comentarySchema);