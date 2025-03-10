'use client'

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { toggleCart, toggleMenu, toggleSearch } from '@/app/store/features/uiSlice'
import { FiShoppingCart, FiMenu, FiSearch, FiUser, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const dispatch = useDispatch()
  const { theme, setTheme } = useTheme()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center">
            <button
              onClick={() => dispatch(toggleMenu())}
              className="mr-4 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
            >
              <FiMenu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            </button>
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-gray-200">
              E-Commerce
            </Link>
          </div>

          {/* Middle Section (Nav Links) */}
          <div className="hidden items-center gap-6 lg:flex">
            {['fashion', 'electronics', 'jewelry', 'beauty'].map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => dispatch(toggleSearch())}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiSearch className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? (
                <FiSun className="h-5 w-5 text-gray-200" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              {cartItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Profile/Login Button */}
            {isAuthenticated ? (
              <Link
                href="/profile"
                className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FiUser className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </Link>
            ) : (
              <Link
                href="/login"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
