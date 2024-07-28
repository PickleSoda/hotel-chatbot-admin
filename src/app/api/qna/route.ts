import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const Qnas = await prisma.Qna.findMany();
    return NextResponse.json(Qnas, { status: 200 });
  } catch (error) {
    console.error('Error fetching Qnas:', error);
    return NextResponse.json({ error: 'Failed to fetch Qnas' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { question, answer } = await req.json();
    const newQna = await prisma.Qna.create({
      data: {
        question,
        answer,
      },
    });
    return NextResponse.json(newQna, { status: 201 });
  } catch (error) {
    console.error('Error creating Qna:', error);
    return NextResponse.json({ error: 'Failed to create Qna' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.next({ status: 204, headers: { Allow: 'GET, POST, OPTIONS' } });
}
