import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../../context/cart_context'

const CartButtons = () => {
  const {total_items}  = useCartContext()
  return (
    <Wrapper>
    <Link to ='/cart' className='cart-btn'>
    <span className="cart-container">
      <span className="cart-value">
        {total_items}
      </span>
    </span>
    </Link>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.5rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -11px;
    background: green;
    width: 10px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60%;
    font-size: 0.65rem;
    color: var(--clr-white);
    padding: 12px;
  }
`
export default CartButtons