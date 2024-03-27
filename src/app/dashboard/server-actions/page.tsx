// Prisma
import prisma from "@/lib/prisma"

// Components Todos
import { TodosGrid } from "@/todos"
import { NewTodo } from "@/components"

export const metadata = {
  title: 'Server Actions',
  description: 'acciones del lado del servidor'
}

export default async function ServerActions() {
  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}})
  return (
    <>
      <div>ServerActions</div>
      <div>
        <NewTodo />
        <TodosGrid todos={todos} />
    </div>
    </>
  )
}
