import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    const subscriber = await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json({ success: true, data: subscriber }, { status: 201 });
  } catch (error) {
    // Catch specific Prisma errors (e.g., P2002 is Unique Constraint Violation)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json({ error: "This email is already subscribed." }, { status: 400 });
      }
    }
    
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}