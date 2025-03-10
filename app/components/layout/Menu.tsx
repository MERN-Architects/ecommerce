'use client'

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { toggleMenu } from '@/app/store/features/uiSlice'
import { FiX } from 'react-icons/fi'

export default function Menu() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.ui.menuOpen)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
      <div className="absolute left-0 top-0 h-full w-64 bg-white p-6 dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => dispatch(toggleMenu())}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 space-y-4">
          <Link
            href="/category/fashion"
            className="block rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => dispatch(toggleMenu())}
          >
            Fashion
          </Link>
          <Link
            href="/category/electronics"
            className="block rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => dispatch(toggleMenu())}
          >
            Electronics
          </Link>
          <Link
            href="/category/jewelry"
            className="block rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => dispatch(toggleMenu())}
          >
            Jewelry
          </Link>
          <Link
            href="/category/beauty"
            className="block rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => dispatch(toggleMenu())}
          >
            Beauty
          </Link>
        </nav>
      </div>
    </div>
  )
} 