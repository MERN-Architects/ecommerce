'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { RootState } from '@/app/store'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container mx-auto max-w-[1440px]">
        <nav className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-primary-600 sm:text-2xl">
            ইকোশপ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {['হোম', 'ফ্যাশন', 'ইলেকট্রনিক্স', 'জুয়েলারি', 'বিউটি'].map((item, index) => (
              <Link
                key={index}
                href={`/category/${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-primary-600 active:text-primary-700"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link href="/cart" className="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-xs font-medium text-white">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {session ? (
              <button onClick={() => signOut()} className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                সাইন আউট
              </button>
            ) : (
              <button onClick={() => signIn()} className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                সাইন ইন
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
            aria-label={isMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-gray-200 dark:border-gray-800 md:hidden"
            >
              <div className="flex flex-col space-y-4 px-4 py-4">
                {['হোম', 'ফ্যাশন', 'ইলেকট্রনিক্স', 'জুয়েলারি', 'বিউটি'].map((item, index) => (
                  <Link
                    key={index}
                    href={`/category/${item.toLowerCase()}`}
                    className="text-sm font-medium transition-colors hover:text-primary-600 active:text-primary-700"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                ))}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
                  <Link href="/cart" className="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggleMenu}>
                    <ShoppingCart className="h-5 w-5" />
                    {cartItems.length > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-xs font-medium text-white">
                        {cartItems.length}
                      </span>
                    )}
                  </Link>
                  {session ? (
                    <button onClick={() => { signOut(); toggleMenu(); }} className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                      সাইন আউট
                    </button>
                  ) : (
                    <button onClick={() => { signIn(); toggleMenu(); }} className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                      সাইন ইন
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}