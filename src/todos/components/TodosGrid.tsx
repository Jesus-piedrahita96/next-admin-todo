// Prisma
import { Todo } from '@prisma/client'
import TodoItems from './TodoItems'

// Interfaces
interface Props {
  todos?: Todo[],
}

export function TodosGrid({todos= []}: Props) {
  return (
    <>
      <span className='my-4 text-5xl font-bold'>TodosGrid</span>
      <div className='flex flex-wrap mt-5 gap-3'>
        {todos?.map(todo => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}
