import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1),
});

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title } = schema.parse(body);

  const task = await prisma.task.create({
    data: { title },
  });

  return NextResponse.json(task);
}
