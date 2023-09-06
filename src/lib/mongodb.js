import { MongoClient } from 'mongodb';

const { MONGODB_URI, DB_NAME } = process.env;

let cachedClient = null;
let cachedDb = null;

export async function connectToMongo() {
  try {
    if (cachedClient && cachedDb) {
      // load from cache
      return {
        client: cachedClient,
        db: cachedDb,
      };
    }

    // Connect to cluster
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db(DB_NAME);

    // set cache
    cachedClient = client;
    cachedDb = db;

    //create new client & db
    return {
      client: cachedClient,
      db: cachedDb,
    };
  } catch (err) {
    console.log('Error connecting to database: ', err);
    throw err;
  }
}
