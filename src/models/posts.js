const mongoose = require('mongoose');
//const category = mongoose.model('categories');
const user = mongoose.model('users');
const schema = mongoose.Schema;

const postSchema = new schema({
    title: String,
    author: {type: schema.Types.ObjectId, ref: 'user'},
    //category: {type: schema.Types.ObjectId, ref: 'category'},
    date: Date,
    content: String,
    image: String,
    activate_comentaries: Boolean
});

module.exports = mongoose.model('posts', postSchema);