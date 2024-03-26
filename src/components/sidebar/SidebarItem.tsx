'use client'

// Next
import Link from "next/link"
import { usePathname } from "next/navigation"

// React icons
import { MdDashboard } from "react-icons/md";
import { SiFastapi } from "react-icons/si";
import { FaServer } from "react-icons/fa";



// Items to display in the sidebar.
const items = [
  { name: 'Dashboard', href: '/dashboard', image: <MdDashboard size={30} /> },
  { name: 'Rest fullApi', href: '/dashboard/rest-todo', image: <SiFastapi size={30} /> },
  {name: 'Server actions', href: '/dashboard/server-actions', image: <FaServer   size={30} />},
]

export default function SidebarItem() {
  const pathname = usePathname()

  return (
    <ul className="space-y-2 tracking-wide mt-8">
          {/* TODO: src/components <SidebarItem /> */}
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`relative px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
            ${pathname === item.href ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400': ''}`}>
          {item.image}
          <span className="-mr-1 font-medium group-hover:text-gray-700">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
