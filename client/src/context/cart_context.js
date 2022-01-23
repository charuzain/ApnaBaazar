import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CLEAR_FILTERS,
} from '../actions'

// check if an item by the name cart exist in local storage 
const getLocalStorage = () => {

  let cart = localStorage.getItem('cart');
  //console.log(cart);
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  }
  else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  // Add item to cart , invoke it at singleProduct Page
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } })
  }

  // function to remove item from cart
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }

  // value : increase/decrease
  const toggleAmount = (id, value) => {
    // console.log(id,value)
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }
  // console.log(toggleAmount)
  //function to clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }


  // we are not persisiting the cart data
  //everytime there is change in cart 
  //invoke useEffect and save current cart in local storage
  useEffect(() => {
    dispatch({type:COUNT_CART_TOTALS})
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart]) // invoke everytime there is a change in cart

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}