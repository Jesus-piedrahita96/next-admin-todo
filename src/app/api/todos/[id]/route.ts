import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    id: string;
  }
}

export async function GET(request: Request, {params}: Segments) {
  const todo = await prisma.todo.findFirst({
    where: {
      id: { equals: params.id }
    }
  })

  if (!todo) return NextResponse.json({ message: 'no existe el todo' }, {status: 400})
  return NextResponse.json({ message: todo })

}