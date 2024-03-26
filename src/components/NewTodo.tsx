'use client';

// React
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

// React icons
import { IoTrashOutline } from 'react-icons/io5';

// Fetch to new todo
import { postTodo } from '@/todos'
import { deleteTodo } from '@/todos'


export const NewTodo = () => {
  const [description, setDescription] = useState('')
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (description.trim().length === 0) return;
    await postTodo(description)
    router.refresh()
    setDescription('')
  }

  const handleDelete = async () => {
    await deleteTodo()
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit}  className='flex w-full ml-6'>
      <input type="text"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type='submit'
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={handleDelete}
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>

    </form>
  )
}