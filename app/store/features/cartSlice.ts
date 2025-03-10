import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  totalQuantity: number
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalQuantity++
      state.totalAmount += newItem.price

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        })
      } else {
        existingItem.quantity++
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      state.totalQuantity--
      
      if (existingItem) {
        state.totalAmount -= existingItem.price
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id)
        } else {
          existingItem.quantity--
        }
      }
    },
    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer 