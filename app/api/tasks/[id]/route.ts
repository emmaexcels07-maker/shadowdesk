import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const task = await prisma.task.update({
    where: { id: params.id },
    data: { completed: true },
  });
  return NextResponse.json(task);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.task.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
