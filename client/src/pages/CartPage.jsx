import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CartContent from '../components/Cart/CartContent'
import Header from '../components/Header'
import Footer from '../components/Footer'
const CartPage = () => {

  const {cart} =useCartContext();
  console.log(cart)
  if(cart.length < 1){
    return (
      <>
       <Header/>
    <Wrapper className='page-100'>

      <div className="empty">
       
        <br/>
          <br />

          <br />
          <br />

          <br />



        <h2>Your Cart !!</h2>
        <div>

        
          <img src="https://adasglobal.com/img/empty-cart.png"></img>
            </div>
        <Link to ='/products' className ='btn'>
          Fill Your Cart !!!
          </Link>
          </div>
    </Wrapper>
      <Footer/>
      </>
    )
  }
  return <main>
    <Header/>
    <PageHero title ='cart'/>
      <Wrapper className='page'>
        <CartContent/>
      </Wrapper>
<Footer/>
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