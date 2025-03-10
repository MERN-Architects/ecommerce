'use client'

import { useParams } from 'next/navigation'
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

const categoryProducts: Record<string, Product[]> = {
  fashion: [
    {
      id: '1',
      name: 'Casual T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      category: 'Fashion',
    },
    {
      id: '2',
      name: 'Denim Jeans',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
      category: 'Fashion',
    },
  ],
  electronics: [
    {
      id: '3',
      name: 'Wireless Headphones',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Smart Watch',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      category: 'Electronics',
    },
  ],
}

export default function CategoryPage() {
  const params = useParams()
  const dispatch = useDispatch()
  const slug = params.slug as string
  const products = categoryProducts[slug] || []
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }))
    toast.success('Added to cart!')
  }

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-12">
            <h1 className="text-2xl font-bold md:text-4xl">{categoryName}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 md:text-lg">
              Explore our {categoryName.toLowerCase()} collection
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
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
                      className="object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="mt-4">
                  <Link
                    href={`/product/${product.id}`}
                    className="block text-base font-semibold hover:text-blue-600 sm:text-lg"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold sm:text-xl">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700 sm:px-4 sm:py-2"
                    >
                      Add to Cart
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