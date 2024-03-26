'use client'

// Prisma
import { Todo } from '@prisma/client'

// Navigate
import { useRouter } from 'next/navigation'

// * file
import { updateTodos } from "@/todos";
import TodoItems from './TodoItems'

// Interfaces
interface Props {
  todos?: Todo[],
}

export function TodosGrid({ todos = [] }: Props) {
  const router = useRouter()

  const handleToggleTodo = async (id: string, complete: boolean) => {
    await updateTodos(id, complete)
    router.refresh() // actualizando la pagina.
  }
  return (
    <>
      <div className='flex flex-wrap mt-5 gap-3'>
        {todos?.map(todo => (
          <TodoItems key={todo.id} todo={todo} toogleTodo={handleToggleTodo} />
        ))}
      </div>
    </>
  )
}
