import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // await prisma.todo.deleteMany();

  // const todo = await prisma.todo.create({
  //   data: {
  //     description: 'hola mundo',
  //   }
  // })

  // await prisma.todo.createMany({
  //   data: [
  //     { description: 'first todo' },
  //     { description: 'second todo' },
  //     { description: 'third todo' },
  //     { description: 'fourth todo', complete: true },
  //     { description: 'fifth todo', complete: true },
  //   ]
  // })

  const todo = await prisma.todo.findMany();

    return NextResponse.json({
      message: todo,
  })
}
