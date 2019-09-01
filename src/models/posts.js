const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = new schema({
    title : String,
    author : String,
    date : Date,
    content : String,
    image : String,
    category : Array,
    act_comentaries : Boolean
});

module.exports = mongoose.model('posts', postSchema);