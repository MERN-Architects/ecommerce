'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 1,
    name: 'ফ্যাশন',
    description: 'আধুনিক পোশাক ও এক্সেসরিজ',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
    href: '/category/fashion',
  },
  {
    id: 2,
    name: 'ইলেকট্রনিক্স',
    description: 'স্মার্ট গ্যাজেট ও ডিভাইস',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=2074&auto=format&fit=crop',
    href: '/category/electronics',
  },
  {
    id: 3,
    name: 'জুয়েলারি',
    description: 'অনন্য গহনা কালেকশন',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    href: '/category/jewelry',
  },
  {
    id: 4,
    name: 'বিউটি',
    description: 'প্রিমিয়াম বিউটি প্রোডাক্ট',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop',
    href: '/category/beauty',
  },
]

export default function Categories() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              ক্যাটাগরি সমূহ
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 sm:mt-4 sm:text-base md:text-lg">
              আপনার পছন্দের ক্যাটাগরি থেকে পণ্য বেছে নিন
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={category.href}
                  className="group relative block h-[200px] overflow-hidden rounded-xl sm:h-[250px]"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-200 sm:text-base">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition group-hover:bg-primary-600">
                      দেখুন
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
