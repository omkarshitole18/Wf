const { MongoClient, ObjectId } = require('mongodb');

// Connection URI for MongoDB
const uri = 'mongodb://localhost:27017/';

// Database name
const dbName = 'mscdb48'; 
// ID of the record you want to delete
const recordIdToDelete = '660fc1908647713dd2f47f05'; // Replace with the actual ObjectId

// Connect to MongoDB and perform operations
async function connectAndPerformOperations() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    // Call the function to select and display records
    await selectAndDisplayRecords(client);

    // Call the function to delete a specific record
    await deleteRecord(client, recordIdToDelete);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

// Function to select and display all records from the 'customers' collection
async function selectAndDisplayRecords(client) {
  const database = client.db(dbName);
  const collection = database.collection('customer');

  // Perform the query to select all records
  const records = await collection.find({}).toArray();

  // Display the records on the console
  console.log('Records from the customers collection:');
  console.log(records);
}

// Function to delete a specific record from the 'customers' collection
async function deleteRecord(client, recordId) {
  const database = client.db(dbName);
  const collection = database.collection('customer');

  // Convert the recordId to ObjectId
  const objectId = new ObjectId(recordId);

  // Perform the delete operation based on the recordId
  const result = await collection.deleteOne({ _id: objectId });

  // Log the result of the delete operation
  console.log(`${result.deletedCount} record deleted`);
}

// Call the connectAndPerformOperations function to establish a connection and perform operations
connectAndPerformOperations().catch(console.error);

