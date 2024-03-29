import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";



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


// Schema de validacion de datos para crear un todo
const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false)
})

// funcion sin destructurar
// export async function POST(request: Request) {

//   try {
//     const body = await postSchema.validate(await request.json())
//     const todo = await prisma.todo.create({ data: body })

//     return NextResponse.json({message: todo})

//   } catch (error) {
//     NextResponse.json({message: error}, {status: 400})
//   }
// }

// funcion destructurada

export async function POST(request: Request) {

  try {
    const { description, complete } = await postSchema.validate(await request.json())
    const todo = await prisma.todo.create({ data: { description, complete } })

    return NextResponse.json({message: todo})

  } catch (error) {
    NextResponse.json({message: error}, {status: 400})
  }
}

export async function DELETE(request: Request) {
  try {
    const completedTodos = await prisma.todo.deleteMany({
      where: {
        complete: true
      }
    })
    return NextResponse.json({ message: completedTodos }, {status: 200})
  } catch (error) {
    NextResponse.json({ message: error }, { status: 400 })
  }
}