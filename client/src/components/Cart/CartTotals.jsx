import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'

export default function () {
  const {total_amount} = useCartContext()
  const shipping_fee = 5.34
  const tax = total_amount * 0.05
  return (
    <div>
     <h5>Subtotal:${total_amount}.00</h5> 
      <h5>Tax:${tax}.00</h5> 
      <h5>Shipping Fee:${shipping_fee}</h5> 
      <hr />
      <h3>Order Total :$ {total_amount+tax+shipping_fee}</h3>
    
    <Link to ='/checkout' className='btn'>Proceed To Payment</Link>
    </div>
  )
}
