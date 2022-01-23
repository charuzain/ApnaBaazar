import React from 'react'
import styled from 'styled-components'
import payment_success from '../images/payment.jpeg';
import { Link, useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

export default function OrderComplete() {
  let { orderId } = useParams();
  return (
    <Wrapper>
      <Header/>
      <div className="card">
        <img class="card-img-top" src={payment_success} alt="Card image cap" />
        <div class="card-body">
          <h6 class="card-text">Thank you for your Order.Your Order Id : {orderId}</h6>
          <Link to={`/`} className='btn btn-primary'> Home </Link>
        </div>
      </div>
    </Wrapper>
  )
} const Wrapper = styled.section`
width: 26rem;
height: 500px;
border-left-width: 120px;
margin-left: 400px;
margin-top: 160px;
`