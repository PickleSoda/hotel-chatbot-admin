import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(req: NextRequest & { query: { id: string } }) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const qna = await prisma.qnA.findUnique({
    where: { id: Number(id) },
  });

  if (!qna) {
    return NextResponse.json({ error: 'QnA not found' }, { status: 404 });
  }

  return NextResponse.json(qna, { status: 200 });
}

export async function PUT(req: NextRequest & { query: { id: string } }) {
  const { id } = req.query;
  const { question, answer } = await req.json();

  if (!id || Array.isArray(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const updatedQna = await prisma.qnA.update({
    where: { id: Number(id) },
    data: { question, answer },
  });

  return NextResponse.json(updatedQna, { status: 200 });
}

export async function DELETE(req: NextRequest & { query: { id: string } }) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  await prisma.qnA.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(null, { status: 204 });
}

export async function OPTIONS() {
  return NextResponse.next({ status: 204, headers: { 'Allow': 'GET, PUT, DELETE, OPTIONS' } });
}
