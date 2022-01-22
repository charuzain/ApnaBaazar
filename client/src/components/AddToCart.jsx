import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'


const AddToCart = (props) => {
  const { addToCart } = useCartContext()
  console.log(props)
  const { id, quantity } = props.product
  console.log(quantity)
  const [amount, setAmount] = useState(1)

  // when user increase the quantity , increase by 1 
  // if quantity of item is greater than item in stock , set new amount to be 
  // equal to quanity in stock
  const increase = () => {
    setAmount((prevAmount) => {
      let newAmount = prevAmount + 1
      if (newAmount > quantity) {
        newAmount = quantity
      }
      return newAmount
    })
  }
  const decrease = () => {
    setAmount((prevAmount) => {
      let newAmount = prevAmount - 1
      if (newAmount < 1) {
        newAmount = 1
      }
      return newAmount
    })
  }
  return (
    <Wrapper>
      <h4>addToCart </h4>
      <div className="btn-container">

        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <Link to="/cart" className='btn' onClick={()=>addToCart(id,amount,props.product)}>
          Add To Cart
        </Link>
      </div>
    </Wrapper>)
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart