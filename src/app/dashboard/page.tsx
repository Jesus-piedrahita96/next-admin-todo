import { WidgetItem } from '@/components'
import React from 'react'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard menu representativo'
}

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem />
      <WidgetItem />
      <WidgetItem />
      <WidgetItem />
    </div>
  )
}
