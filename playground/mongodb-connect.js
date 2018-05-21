//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// console.log(ObjectID);
// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Joshua', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do ',
	// 	completed: false
	// }, (err, result)=>{
	// 	if (err) {
	// 		return console.log('Unable to insert Todo ', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//Insert new doc into Users (name, age, location)

	// db.collection('Users').insertOne({
	// 	name: 'Simba',
	// 	age: 50,
	// 	location: 'Africa'
	// },(err, result)=>{
		
	// 	if (err) {
	// 		return console.log('Unable to insert User ', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
});