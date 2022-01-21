import React from 'react'
import styled from 'styled-components'
import Product from './Product'

export default function GridView(props) {
  const products = props.products
  console.log(products)
  return(
    <Wrapper>
      <div className="products-container">
        {products.map((product)=>{
          return <Product key={product.id}{...product}/>
        })}
      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    height: 250px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
