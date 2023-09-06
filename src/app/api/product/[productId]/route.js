import * as mongoDB from 'mongodb';
import { productsCollection } from '@/lib/productsCollection';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req, { params }) {
  // Grab products collection
  const collections = {};
  collections.rewards = await productsCollection();

  // Grab product ID parameter
  const id = params.productId;
  const o_id = new mongoDB.ObjectId(id);

  try {
    const games = await collections.rewards.find({ _id: o_id }).toArray();
    return NextResponse.json(games);
  } catch (error) {
    if (error instanceof Error) {
      console.log('inside api/product error 500');
      return NextResponse.json({
        message: `Error fetching product details for product: ${id}`,
      });
    }
  }
}
