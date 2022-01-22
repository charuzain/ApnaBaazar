import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {

    const { id, amount, product } = action.payload
    // check if the item is already added in the cart
    const tempItem = state.cart.find((i) => i.id === id)

    // if item exist in the cart 
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id ) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
        max: product.quantity,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
}

export default cart_reducer