const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//for changing to local db, on command line : export DATABASEURL=mongodb//localhost/yelp_camp_v12

const url = process.env.DATABASEURL || 'mongodb://localhost:27017/TodoApp';

//mongoose.connect('mongodb://joshua:bucky123@ds133630.mlab.com:33630/todo_app' || 'mongodb://localhost:27017/TodoApp');

mongoose.connect(url);

module.exports = { mongoose };