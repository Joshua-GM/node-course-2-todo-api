const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const User = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findOneAndRemove({}).then((result)=>{
//	console.log(result);
//});


//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5b07a53f34e98a7432b1a07a').then((result)=>{
	console.log(result);
});