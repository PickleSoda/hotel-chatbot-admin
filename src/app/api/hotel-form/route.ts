import { NextRequest, NextResponse } from 'next/server';
import { processHotelForm } from '@/utils/hotelForm';

export async function POST(req: NextRequest) {
  const formData = await req.json();

  if (!formData) {
    return NextResponse.json({ error: 'Form data is required' }, { status: 400 });
  }

  try {
    await processHotelForm(formData);
    return NextResponse.json({ message: 'Form processed successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error processing form' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.next({ status: 204, headers: { 'Allow': 'POST, OPTIONS' } });
}
