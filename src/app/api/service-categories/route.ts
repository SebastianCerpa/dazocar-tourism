import { NextResponse } from 'next/server';
import { getAllServiceCategories } from '@/lib/db';

/**
 * GET /api/service-categories
 * Retrieves all service categories with their services
 */
export async function GET() {
  try {
    const serviceCategories = await getAllServiceCategories();
    return NextResponse.json(serviceCategories);
  } catch (error) {
    console.error('Error fetching service categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service categories' },
      { status: 500 }
    );
  }
}