//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5b022f76570e03cf8d6022c0')
	// 	},{
	// 		$set: {completed: true}
	// 	},{
	// 			returnOriginal: false
	// 	}).then((result)=>{
	// 		console.log(result);
	// 	});


	db.collection('Users').findOneAndUpdate({
		_id:new ObjectID('5afe498910b92d0811b62b3a')
	},{ 
		$set: { name: 'Joshua'},
		$inc: { age: 1}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});


	// db.close();
});