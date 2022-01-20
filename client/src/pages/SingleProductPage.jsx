import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context'
import Loading from '../components/Loading';
import Error from '../components/Error';

// import { Link } from 'react-router-dom';

// const url = "http://localhost:3001/api/products?id="

export default function SingleProductPage() {
  const params = useParams()
    const id = params.id
  const url = `http://localhost:3001/api/products/${id}`
  const { single_product_loading, single_product_error, single_product, fetchSingleProduct } = useProductsContext()
  
  useEffect(()=>{
    fetchSingleProduct(url)
    console.log(single_product)
  },[id])
 
  useEffect(() => {
   
   
  }, )

  
  return (
    <div>
      {single_product_loading && <Loading/>}
      {single_product_error && <Error/>}
      <h1>hi</h1>
    </div>
  )
}
