import { prisma } from "../../../prisma/prisma.config";
import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = schema.parse(body);

  await prisma.subscriber.create({
    data: { email },
  });

  return NextResponse.json({ success: true });
}
