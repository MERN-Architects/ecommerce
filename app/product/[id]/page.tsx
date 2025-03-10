'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/app/store/features/cartSlice'
import toast from 'react-hot-toast'
import { FiMinus, FiPlus, FiStar } from 'react-icons/fi'

const products = {
  '1': {
    id: '1',
    name: 'Casual T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    category: 'Fashion',
    description:
      'A comfortable and stylish casual t-shirt made from 100% cotton. Perfect for everyday wear.',
    rating: 4.5,
    reviews: 128,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy'],
  },
  // Add more products here...
}

export default function ProductPage() {
  const params = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const product = products[params.id as keyof typeof products]

  if (!product) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color')
      return
    }
    dispatch(
      addToCart({
        ...product,
        quantity,
        size: selectedSize,
        color: selectedColor,
      })
    )
    toast.success('Added to cart!')
  }

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-2xl font-bold md:text-4xl">{product.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'fill-current' : ''
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-base text-gray-600 dark:text-gray-400 md:text-lg">
                {product.description}
              </p>

              <div>
                <h2 className="text-lg font-semibold">Size</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg border px-4 py-2 text-sm transition md:text-base ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-600 text-white'
                          : 'border-gray-200 hover:border-primary-600 dark:border-gray-800'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Color</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-lg border px-4 py-2 text-sm transition md:text-base ${
                        selectedColor === color
                          ? 'border-primary-600 bg-primary-600 text-white'
                          : 'border-gray-200 hover:border-primary-600 dark:border-gray-800'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Quantity</h2>
                <div className="mt-2 flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-lg border border-gray-200 p-2 transition hover:border-primary-600 dark:border-gray-800"
                  >
                    <FiMinus className="h-5 w-5" />
                  </button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-lg border border-gray-200 p-2 transition hover:border-primary-600 dark:border-gray-800"
                  >
                    <FiPlus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-800">
                <span className="text-2xl font-bold md:text-3xl">
                  ${(product.price * quantity).toFixed(2)}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-700 md:text-base"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 