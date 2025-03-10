'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { toggleSearch } from '@/app/store/features/uiSlice'
import { FiSearch, FiX } from 'react-icons/fi'

export default function Search() {
  const dispatch = useDispatch()
  const router = useRouter()
  const isOpen = useSelector((state: RootState) => state.ui.searchOpen)
  const [query, setQuery] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      dispatch(toggleSearch())
      setQuery('')
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute left-1/2 top-4 w-full max-w-2xl -translate-x-1/2 rounded-lg bg-white p-4 dark:bg-gray-900">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-lg border-none bg-gray-100 px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            autoFocus
          />
          <button
            type="submit"
            className="absolute right-12 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <FiSearch className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => dispatch(toggleSearch())}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <FiX className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  )
} 