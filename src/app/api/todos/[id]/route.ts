import prisma from "@/lib/prisma";
import { Prisma, Todo } from "@prisma/client";
import { equal } from "assert";
import { get } from "http";
import { NextResponse } from "next/server";

import * as yup from 'yup'

interface Segments {
  params: {
    id: string;
  }
}

export interface TodoI {
  message: Message;
}

export interface Message {
  id:          string;
  description: string;
  complete:    boolean;
  createAt:    string;
  updateAt:    string;
}

// funcion para obtener todo
const getTodo = async (id: string): Promise<Todo | null > => {
  const todoId = await prisma.todo.findFirst({ where: { id }})
  return todoId
}

// funcion get que por defecto como segundo parametro recibe los params que se envian
export async function GET(request: Request, {params}: Segments) {
  const todo = await getTodo(params.id)

  if (!todo) return NextResponse.json({ message: 'no existe el todo' }, {status: 400})
  return NextResponse.json({ message: todo })

}

// schema de validacion del update
const updateSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional()
})

export async function PUT(request: Request, { params }: Segments) {

  const todo = await getTodo(params.id) // busco el id en mi db

  if (!todo) return NextResponse.json({ message: 'no existe el todo' }, { status: 400 })

  try {
    // obtengo el body de la request (json)
    const body = await updateSchema.validate(await request.json())

    // actualizo el todo con el body en la db
    const updatedTodo = await prisma.todo.update({
      where: { id: todo?.id },
      data: body
    })

    // actualilzar por destructuracion
    const updatedTodo2 = await prisma.todo.update({
      where: { id: todo?.id},
      data: {
        description: body.description,
        complete: body.complete,
      }
    })

    return NextResponse.json(updatedTodo2, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 }) // 400 bad request
  }
}