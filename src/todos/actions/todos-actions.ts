'use server'

import prisma from "@/lib/prisma"
// Prisma
import { Todo } from "@prisma/client"
import { revalidatePath } from "next/cache"

//------------------------

export const updateTodos = async (id: string, complete: boolean): Promise<Todo | void> => {
  const todoId = await prisma.todo.findFirst({ where: { id } })   // buscamos el todo que necesitamos con el id
  if (!todoId) throw new Error(`Todo whit ${id} not found`) //validamos el todo
  const updatedTodo = await prisma.todo.update({ // si encuentro el todo actualizamos el check list
    where: { id },
    data: { complete }
  })

  revalidatePath('/dashboard/server-actions') // actualzar cache
  return updatedTodo
}

export const addTodo = async (description: string): Promise<Todo | void> => {
  try {
    const createTodo = await prisma.todo.create({ data: { description } })
    revalidatePath('/dashboard/server-actions')
    return createTodo

  } catch (error) {
    throw new Error(`problema al crear el todo: ${error}`);
  }
}

export const deleteTodos = async (): Promise<void> => {
  try{
    await prisma.todo.deleteMany({ where: { complete: true } })
    revalidatePath('/dashboard/server-actions')

  } catch (error) {
    throw new Error(`Problemas al eliminar todos completados ${error}`);
  }
}