const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://joshua:bucky123@ds133630.mlab.com:33630/todo_app' || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };