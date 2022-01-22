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
    
    // if item exist in the cart , iterate and check where item is update the amount 
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount
          // check the inventory
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: tempCart }
    } else {    // if item doesnot exist in cart , create and add a new item to cart
      const newItem = {         // create new item
        id: id,                 //product id
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
        max: product.quantity,
      }
      console.log(newItem)
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
}

export default cart_reducer