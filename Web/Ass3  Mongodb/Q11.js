const { MongoClient } = require('mongodb');

var url = 'mongodb://192.168.100.203:27017';

MongoClient.connect(url, function(err, db){
	if(err)
		throw err;
	var db_obj = db.db('mscdb20');
	db_obj.createCollection("forex", function(err, res)
	{
		if(err)
                	throw err;
		console.log("Collection Created");
		db.close();
	});
});

