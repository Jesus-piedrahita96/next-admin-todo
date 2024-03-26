import { Todo } from "@prisma/client";

export const updateTodos = async (id: string, complete: boolean): Promise<Todo | void> => {
  const body = { complete }; // cuerpo del campo a modificar en la base de datos.

  // realizando el fetch para actualizar, un campo en la db
  const updatedTodo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then(respose => respose.json())

  return updatedTodo;
}

export const postTodo = async (description: string): Promise<Todo | void> => {
  const body = { description }; // cuerpo del campo a crear en la base de datos.

  // realizando el fetch para crear una row en la db
  const newTodo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then(respose => respose.json())

  return newTodo;
}

export const deleteTodo = async (): Promise<void> => {
  await fetch(`/api/todos`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
}

