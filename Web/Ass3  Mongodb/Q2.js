const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const dbName = 'mscdb48'; 


const sampleData = [
  { Name: 'abc', Id:101 },
  { Name: 'xyz', Id:102 },
 
];


async function connectAndInsertData() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

   
    await insertData(client, sampleData);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}


async function insertData(client, data) {
  const database = client.db(dbName);
  const collection = database.collection('abc');

 
  const result = await collection.insertMany(data);
  console.log(`${result.insertedCount} documents inserted into the 'customers' collection`);
}


connectAndInsertData().catch(console.error);


