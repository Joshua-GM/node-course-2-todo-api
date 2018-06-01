const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID;
const userTwoID = new ObjectID;

const users =[{
	_id: userOneId,
	email: 'josh@example.com',
	password: 'userOnePass',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
	}]
},{
	_id: userTwoID,
	email: 'jen@example.com',
	password: 'userTwoPass'
}];


const todos = [{
	_id: new ObjectID(),
	text: 'First test to do'
},{
	_id: new ObjectID(),
	text: 'Second test to do',
	completed: true,
	completedAt: 33456
}];

const populateTodos = (done)=>{
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

const populateUsers = (done)=>{
	User.remove({}).then(()=>{
		let userOne = new User(users[0]).save();
		let userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo]);
	}).then(() => done());
}


module.exports = {todos, populateTodos, users, populateUsers};