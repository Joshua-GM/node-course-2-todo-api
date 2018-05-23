const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const User = require('./../server/models/user');


// let id = '5b04da7da4289f090d69562b1';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos : ',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo : ',todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if (!todo) {
// 		return console.log('Id not found!');
// 	}
// 	console.log('Todo By Id : ',todo);
// }).catch((e)=> console.log(e));

let uid = '5b03e3004a42c40ae3fba58f';

User.findById(uid).then((user)=>{
	if (!user) {
		return console.log('Id not found');
	}
	console.log('User By Id : ', user);
}).catch((e) => console.log('Invalid ID type'));