import { NextResponse } from 'next/server';
import { createContactSubmission } from '@/lib/db';

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create contact submission in database
    const submission = await createContactSubmission({
      name,
      email,
      subject,
      message
    });
    
    return NextResponse.json({
      success: true,
      data: submission
    });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}