'use client'
import { setCookie } from 'cookies-next'
import React from 'react'
import { number } from 'yup'

interface Props {
  currentTab?: number,
  tabOptions?: number[],
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: Props) => {
  const [seleted, setSeleted] = React.useState(currentTab)

  const onTab = (tabSeleted: number) => {
    setSeleted(tabSeleted)
    setCookie('seletedTab', tabSeleted.toString())
  }

  return (
    <div className={`grid w-80 ${'grid-cols-'+tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>
      {tabOptions.map((tab, index) => (
        <div key={index}>
          <input
            checked={seleted === tab}
            onChange={() => { }}
            type="radio"
            id={tab.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTab(tab)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            {tab}
          </label>
        </div>
      ))}
    </div>
  )
}
