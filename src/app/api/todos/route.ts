import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  //el simbolo de mas realiza la conversion de string a number es igual que colocar Number()
  const take = +(searchParams.get('take') ?? '10')
  const skip = +(searchParams.get('skip') ?? '0')

  //realizando validacion de que sean numeros
  if (isNaN(take) || isNaN(skip)) {
    return NextResponse.json({
      message: "Incorrecto debe de ser un numero",
    });
  }

  //realizando la consulta en db
  const todos = await prisma.todo.findMany({ take, skip, })

  return NextResponse.json(todos)
}