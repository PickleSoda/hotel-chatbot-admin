import { NextRequest, NextResponse } from "next/server";
import { handleQuery } from "@/utils/chat";
export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const response = await handleQuery(message, "hotel-management");
  return NextResponse.json(response, { status: 200 });
}

export async function OPTIONS() {
  return NextResponse.next({
    status: 204,
    headers: { Allow: "POST, OPTIONS" },
  });
}
