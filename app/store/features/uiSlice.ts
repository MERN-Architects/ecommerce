import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  cartOpen: boolean
  menuOpen: boolean
  searchOpen: boolean
  loading: boolean
}

const initialState: UIState = {
  cartOpen: false,
  menuOpen: false,
  searchOpen: false,
  loading: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartOpen = !state.cartOpen
    },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen
    },
    toggleSearch(state) {
      state.searchOpen = !state.searchOpen
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
})

export const { toggleCart, toggleMenu, toggleSearch, setLoading } = uiSlice.actions
export default uiSlice.reducer 