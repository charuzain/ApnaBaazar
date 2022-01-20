import axios from "axios";
import React, {useContext , useEffect , useReducer} from 'react';
import reducer from '../reducers/products_reducer';
// import { Children } from "react";
  import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_END,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_END
  } from '../actions'

const initialState ={
  products_loading : false, // to handle loading of all products
  products_error :false,    // default value 
  products:[],              
  featured_products:[]     // to display on home page
}
const ProductsContext = React.createContext()

export const ProductsProvider = ({children})=>{
  const [state,dispatch] = useReducer(reducer,initialState)


  const fetchAllProducts = (url)=>{
    dispatch({type: GET_PRODUCTS_BEGIN}) // dispatching action, this will set up the loading
    axios.get(url).then((res) => {
      const products = res.data
    dispatch({type:GET_PRODUCTS_END, payload:products})
    })
    .catch((error)=> dispatch({type:GET_PRODUCTS_ERROR}));
  }
      // FETCH IT ONCE AND DISTRIBUE IT 
    useEffect(() => {
      const url = "http://localhost:3001/api/products"
      fetchAllProducts(url)
    }, []);
    
    
    return(
    <ProductsContext.Provider value={{...state}}>
      {children}
    </ProductsContext.Provider>
  )
}
export const useProductsContext =()=>{
  return useContext(ProductsContext)
}