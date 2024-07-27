import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET(req: NextRequest) {
  const qnas = await prisma.qnA.findMany();
  return NextResponse.json(qnas, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { question, answer } = await req.json();
  const newQna = await prisma.qnA.create({
    data: {
      question,
      answer,
    },
  });
  return NextResponse.json(newQna, { status: 201 });
}

export async function OPTIONS() {
  return NextResponse.next({ status: 204, headers: { 'Allow': 'GET, POST, OPTIONS' } });
}
