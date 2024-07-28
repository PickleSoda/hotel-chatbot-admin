import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const Qna = await prisma.Qna.findUnique({
    where: { id: Number(id) },
  });

  if (!Qna) {
    return NextResponse.json({ error: 'Qna not found' }, { status: 404 });
  }

  return NextResponse.json(Qna, { status: 200 });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { question, answer } = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const updatedQna = await prisma.Qna.update({
    where: { id: Number(id) },
    data: { question, answer },
  });

  return NextResponse.json(updatedQna, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  await prisma.Qna.delete({
    where: { id: Number(id) },
  });

  return new NextResponse(null, { status: 204 });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: { Allow: 'GET, PUT, DELETE, OPTIONS' } });
}
