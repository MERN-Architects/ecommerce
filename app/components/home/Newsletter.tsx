'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    toast.success('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="bg-primary-600 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Get the latest updates about new products and special offers
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border-none px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary-600 transition hover:bg-primary-50"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 