import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CartContent from '../components/Cart/CartContent'
import Header from '../components/Header'
const CartPage = () => {

  const {cart} =useCartContext();
  console.log(cart)
  if(cart.length < 1){
    return (<Wrapper className='page-100'>
      {/* <Header/> */}
      <div className="empty">
        <h2>Cart is Empty</h2>
        <Link to ='/products' className ='btn'>
          Fill Your Cart !!!
          </Link>
          </div>
    </Wrapper>
    )
  }
  return <main>
    {/* <Header/> */}
    {/* <PageHero title ='cart'> */}
      <Wrapper className='page'>
        <CartContent/>
      </Wrapper>

    {/* </PageHero> */}
  </main>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage