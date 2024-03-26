'use client'
// Prisma
import { Todo } from "@prisma/client"

// Style
import styles from './TodoItems.module.css'

// React icons
import { IoCheckboxOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

// Interfaces
interface Props {
  todo: Todo,
  toogleTodo: (id: string, complete: boolean) => Promise<Todo | void>,
}


export default function TodoItems({ todo, toogleTodo  }: Props) {
  return (
    <div className={`${todo.complete ? styles.todoDone : styles.todoPending}`}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

        <div className={`
          flex p2 rounded-md
          hover: bg-opacity-60 cursor-pointer
          ${todo.complete ? 'bg-blue-200' : 'bg-red-200'}
        `}
          onClick={() => toogleTodo(todo.id, !todo.complete)}
        >
          {todo.complete ? <IoCheckboxOutline size={30} /> : <MdCheckBoxOutlineBlank size={30} />}
        </div>

        <div className="text-center sm:text-left">
          {todo.description}
        </div>
      </div>
    </div>
  )
}
