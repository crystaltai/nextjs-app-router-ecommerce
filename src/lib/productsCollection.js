import { connectToMongo } from '@/lib/mongodb';

export async function productsCollection() {
  // Connect to database
  const connection = await connectToMongo();

  // Search rewards collection
  const productsCollection = connection.db.collection(
    process.env.COLLECTION_NAME
  );

  return productsCollection;
}
