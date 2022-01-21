import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import  {useFilterContext}  from '../context/filter_context'
import GridView from './Gridview';
import ListView from './ListView';


export default function ProductList() {
  const {filtered_products:products,grid_view} = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        No products matched your search...
      </h5>
    )
  }
  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products}>product list</GridView>
}

