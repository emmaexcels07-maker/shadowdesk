import { prisma } from "../../../../prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const task = await prisma.task.update({
    where: { id: params.id },
    data: { completed: true },
  });
  return NextResponse.json(task);
}catch (err) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.task.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
