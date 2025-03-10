'use client'

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { toggleCart } from '@/app/store/features/uiSlice'
import { removeFromCart } from '@/app/store/features/cartSlice'
import { FiX } from 'react-icons/fi'

export default function Cart() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.ui.cartOpen)
  const items = useSelector((state: RootState) => state.cart.items)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => dispatch(toggleCart())}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Your cart is empty
            </p>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                    <p className="mt-1 font-medium">${item.price}</p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <FiX className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
                <span className="text-lg font-medium">Total</span>
                <span className="text-xl font-bold">${totalAmount.toFixed(2)}</span>
              </div>
              <button className="w-full rounded-lg bg-primary-600 py-3 text-sm font-medium text-white hover:bg-primary-700">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 