import { GET_PRODUCTS_BEGIN,
         GET_PRODUCTS_END,
         GET_PRODUCTS_ERROR,
         GET_SINGLE_PRODUCT_BEGIN, 
         GET_SINGLE_PRODUCT_END, 
         GET_SINGLE_PRODUCT_ERROR } from "../actions.js"

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_END) {
    const featured_products = action.payload.filter((product) => product.featured === true) // action.payload =products
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true }
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state, single_product_loading: true, single_product_error: false,
    }
  }

  if (action.type === GET_SINGLE_PRODUCT_END) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state, single_product_loading: false, single_product_error: true,
    }
  }






  return { ...state, products_loading: false }
}

export default products_reducer