'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/app/store/features/cartSlice'
import toast from 'react-hot-toast'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  quantity?: number
}

const products: Product[] = [
  {
    id: '1',
    name: 'স্মার্ট ওয়াচ',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    category: 'ইলেকট্রনিক্স',
  },
  {
    id: '2',
    name: 'ওয়্যারলেস ইয়ারবাড',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop',
    category: 'ইলেকট্রনিক্স',
  },
  {
    id: '3',
    name: 'লেদার ওয়ালেট',
    price: 899,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2071&auto=format&fit=crop',
    category: 'এক্সেসরিজ',
  },
  {
    id: '4',
    name: 'স্মার্ট ব্যান্ড',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e3fd6ce?q=80&w=2088&auto=format&fit=crop',
    category: 'ইলেকট্রনিক্স',
  },
  {
    id: '5',
    name: 'ডিজাইনার শাড়ি',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1610030181087-540017dc9d61?q=80&w=1974&auto=format&fit=crop',
    category: 'ফ্যাশন',
  },
  {
    id: '6',
    name: 'স্টাইলিশ সানগ্লাস',
    price: 799,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1980&auto=format&fit=crop',
    category: 'এক্সেসরিজ',
  },
  {
    id: '7',
    name: 'ডায়মন্ড নেকলেস',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop',
    category: 'জুয়েলারি',
  },
  {
    id: '8',
    name: 'স্কিন কেয়ার সেট',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop',
    category: 'বিউটি',
  },
  {
    id: '9',
    name: 'লেডিস হ্যান্ডব্যাগ',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2070&auto=format&fit=crop',
    category: 'ফ্যাশন',
  },
  {
    id: '10',
    name: 'মেকাপ ব্রাশ সেট',
    price: 899,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop',
    category: 'বিউটি',
  },
  {
    id: '11',
    name: 'স্মার্টফোন',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop',
    category: 'ইলেকট্রনিক্স',
  },
  {
    id: '12',
    name: 'গোল্ড রিং',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop',
    category: 'জুয়েলারি',
  }
]

export default function FeaturedProducts() {
  const dispatch = useDispatch()

  const handleAddToCart = (product: Product) => {
    const cartItem = { ...product, quantity: 1 }
    dispatch(addToCart(cartItem))
    toast.success('কার্টে যোগ করা হয়েছে!')
  }

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              জনপ্রিয় পণ্যসমূহ
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 sm:mt-4 sm:text-base md:text-lg">
              আমাদের সেরা বিক্রয় পণ্যগুলি দেখুন
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={index < 4}
                      className="object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="mt-4 flex flex-col items-center text-center">
                  <Link
                    href={`/product/${product.id}`}
                    className="block text-base font-semibold hover:text-primary-600 sm:text-lg"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                  </p>
                  <div className="mt-2 flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                    <span className="text-lg font-bold sm:text-xl">
                      ৳{product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-primary-700 sm:px-4 sm:py-2"
                    >
                      কার্টে যোগ করুন
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 