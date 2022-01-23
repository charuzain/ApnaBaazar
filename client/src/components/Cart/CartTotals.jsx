import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'
import styled from 'styled-components'

export default function () {
  const {total_amount} = useCartContext()
  const shipping_fee = 5.34
  const tax = total_amount * 0.05
  return (
    <Wrapper>
    <div>
      <article>
          <h5>Subtotal : <span>${total_amount}.00</span></h5> 
          <p>Tax:${tax}.00</p> 
          <p>Shipping Fee : <span>${shipping_fee} </span></p> 
      <hr />
          <h4>Order Total : <span>$ {total_amount + tax + shipping_fee} </span></h4>
        </article>
    
    <Link to ='/checkout' className='btn'>Proceed To Payment</Link>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    color :green
    
  }
`
