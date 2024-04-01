import { cookies } from 'next/headers'
import React from 'react'

// Componenets
import {TabBar} from '@/components'
import { describe } from 'node:test'

export const metadata = {
  title: 'Cookie',
  description: 'las cookies (prueba)'
}

export default function CokkiePage() {
  const cookieStore = cookies()
  const tabCookie = Number(cookieStore.get('seletedTab')?.value ?? '1')
  return (
    <>
      <div>Tab Bar</div>
      <TabBar currentTab={tabCookie} />
    </>
  )
}
