'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/app/store/features/cartSlice'
import toast from 'react-hot-toast'

const categoryProducts = {
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
  jewelry: [
    {
      id: '5',
      name: 'Gold Necklace',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
      category: 'Jewelry',
    },
    {
      id: '6',
      name: 'Diamond Ring',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      category: 'Jewelry',
    },
  ],
  beauty: [
    {
      id: '7',
      name: 'Skincare Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800',
      category: 'Beauty',
    },
    {
      id: '8',
      name: 'Makeup Kit',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
      category: 'Beauty',
    },
  ],
}

export default function CategoryPage() {
  const params = useParams()
  const dispatch = useDispatch()
  const slug = params.slug as string
  const products = categoryProducts[slug as keyof typeof categoryProducts] || []
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product))
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
                    className="block text-base font-semibold hover:text-primary-600 sm:text-lg"
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
                      className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-primary-700 sm:px-4 sm:py-2"
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