import { prisma } from "../../../../prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // <-- Promise
) {
  const { id } = await params; // <-- await it

  try {
    const task = await prisma.task.update({
      where: { id },
      data: { completed: true },
    });
    return NextResponse.json(task);
  } catch (err) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // <-- Promise
) {
  const { id } = await params; // <-- await it

  try {
    await prisma.task.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}
