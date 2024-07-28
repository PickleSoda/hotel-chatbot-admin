import { NextRequest, NextResponse } from 'next/server';
import { createLangchainAgent } from '../../../lib/langchain';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  const agent = await createLangchainAgent();
  const response = await agent.invoke(message);

  return NextResponse.json({ response }, { status: 200 });
}

export async function OPTIONS() {
  return NextResponse.next({ status: 204, headers: { 'Allow': 'POST, OPTIONS' } });
}
