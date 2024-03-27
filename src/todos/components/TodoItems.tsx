'use client'
// Prisma
import { Todo } from "@prisma/client"

// Style
import styles from './TodoItems.module.css'

// React icons
import { IoCheckboxOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { startTransition, useOptimistic } from "react";
import { boolean } from "yup";

// Interfaces
interface Props {
  todo: Todo,
  toogleTodo: (id: string, complete: boolean) => Promise<Todo | void>,
}


export default function TodoItems({ todo, toogleTodo  }: Props) {
  const [todoOptimistac, setTodoOptimistac] = useOptimistic(
    todo,
    (state, newComplete: boolean) => ({ ...state, complete: newComplete })
  )

  const handleOnToggle = async () => {
    try {
      startTransition(() => setTodoOptimistac(!todoOptimistac.complete))
      await toogleTodo(todoOptimistac.id, !todoOptimistac.complete)
    } catch (error) {
      startTransition(() => setTodoOptimistac(!todoOptimistac.complete))
    }
  }

  return (
    <div className={`${todoOptimistac.complete ? styles.todoDone : styles.todoPending}`}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

        <div className={`
          flex p2 rounded-md
          hover: bg-opacity-60 cursor-pointer
          ${todoOptimistac.complete ? 'bg-blue-200' : 'bg-red-200'}
        `}
          onClick={handleOnToggle}
        >
          {todoOptimistac.complete ? <IoCheckboxOutline size={30} /> : <MdCheckBoxOutlineBlank size={30} />}
        </div>

        <div className="text-center sm:text-left">
          {todoOptimistac.description}
        </div>
      </div>
    </div>
  )
}
