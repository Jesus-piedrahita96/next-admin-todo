// Prisma
import prisma from "@/lib/prisma"

// Components Todos
import { TodosGrid } from "@/todos"
import { NewTodo } from "@/components"

export const metadata = {
  title: 'todos restFull',
  description: 'todos restFullApi',
}

export default async function RestFullApiPage() {
  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}})
  return (
    <div>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  )
}
