const userModel = require("../../src/models/register");

const { MongoClient } = require('mongodb');

// Connection URI
async function onFinishHandler(data) {
try {
await client.connect();
const database = client.db('test');
const collection = database.collection('registers');

// Insert data into the collection
const result = await collection.insertOne(data);
console.log(`A document was inserted with the _id: ${result.insertedId}`);
} finally {
// Ensures that the client will close when you finish/error
await client.close();
}
}

// Call the onFinishHandler with the data you want to store
const data = {
email: 'example@example.com', // Replace with the actual email from the form
password: 'example123', // Replace with the actual password from the form
};

onFinishHandler(data);
