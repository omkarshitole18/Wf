const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017/';


const dbName = 'mscdb48'; 


async function connect() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');


    await selectAndDisplayRecords(client);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}


async function selectAndDisplayRecords(client) {
  const database = client.db(dbName);
  const collection = database.collection('customer');


  const cursor = collection.find({});
  const result = await cursor.toArray();

 
  console.log('Records from the customer table:');
  console.log(result);
}


connect().catch(console.error);

