import React from 'react'
import  {useFilterContext}  from '../context/filter_context'
import GridView from './Gridview';


export default function ProductList() {
  const {filtered_products:products} = useFilterContext();
  return (
    <div>
      <GridView products={products}>Product List</GridView>
    </div>
  )
}
