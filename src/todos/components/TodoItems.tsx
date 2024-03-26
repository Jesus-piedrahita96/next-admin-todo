// Prisma
import { Todo } from "@prisma/client"

// Style
import styles from './TodoItems.module.css'

// React icons
import { IoCheckboxOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";



// Interfaces
interface Props {
  todo: Todo
}


export default function TodoItems({ todo }: Props) {
  return (
    <div className={`${todo.complete ? styles.todoDone : styles.todoPending}`}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

        <div className={`
          flex p2 rounded-md cursor-pointer
          hover: bg-opacity-60
          ${todo.complete ? 'bg-blue-200' : 'bg-red-200'}
        `}>
          {todo.complete ? <IoCheckboxOutline size={30} /> : <MdCheckBoxOutlineBlank size={30} />}
        </div>

        <div className="text-center sm:text-left">
          {todo.description}
        </div>
      </div>
    </div>
  )
}
