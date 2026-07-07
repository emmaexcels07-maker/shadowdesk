import { prisma } from "../../../prisma/prisma.config";
import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = schema.parse(body);

    const subscriber = await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json(
      { success: true, subscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to subscribe." },
      { status: 400 }
    );
  }
}