import * as mongoDB from 'mongodb';
import { productsCollection } from '@/lib/productsCollection';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req, res) {
  // Grab products collection
  const collections = {};
  collections.rewards = await productsCollection();

  try {
    const games = await collections.rewards.find({}).toArray();
    return NextResponse.json(games);
  } catch (error) {
    if (error instanceof Error) {
      console.log('inside api/products error 500');
      return NextResponse.json({ message: 'Error fetching products' });
    }
  }
}
