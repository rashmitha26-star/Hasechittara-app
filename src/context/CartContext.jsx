import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (artwork) => {
    setCart(prev => {
      if (prev.find(item => item.id === artwork.id)) return prev
      return [...prev, artwork]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id))
  const clearCart = () => setCart([])
  const isInCart = (id) => cart.some(item => item.id === id)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
