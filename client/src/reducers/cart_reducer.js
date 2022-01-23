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
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    console.log(id, value)
    console.log(state.cart)
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'increase') {
          let newAmount = item.amount + 1
          console.log(newAmount)
          console.log(item.max)
          if (newAmount > item.max) {
            newAmount = item.max
            console.log(item)
            console.log(newAmount)
          }
          return { ...item, amount: newAmount }
        }
        if (value === 'decrease') {

          let newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }
      }
      else {
        return item
      }

    })
    return { ...state, cart: tempCart }
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce((total, cartItem) => { //total is return from reduce
      const { amount, price } = cartItem
      total.total_items += amount;
      total.total_amount += price * amount
      return total
    }, {
      total_items: 0,
      total_amount: 0
    })

    return { ...state, total_items, total_amount }
  }


}

export default cart_reducer