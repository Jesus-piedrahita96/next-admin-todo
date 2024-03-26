
// Components Todos
import { TodosGrid } from "@/todos"
import prisma from "@/lib/prisma"

export const metadata = {
  title: 'todos restFull',
  description: 'todos restFullApi',
}


export default async function RestFullApiPage() {
  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}})
  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  )
}
