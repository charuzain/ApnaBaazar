import React, { Fragment, useReducer, useState } from 'react';
import Footer from './Footer';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/cart_context'
import {CardElement ,  useStripe } from '@stripe/react-stripe-js';
import { Elements , useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from './Header';
import HeaderOrder from './HeaderOrder';

const stripePromise = loadStripe("STRIPE_PUBLISHABLE_KEY");

export default function Order() {
  const elements = useElements();
  const stripe = useStripe();
  const {cart , total_amount } =useCartContext();
  console.log(cart , total_amount);
  const shipping_fee = 5.34;
  const tax = Math.round((total_amount * 0.05)*100)/100
  const order_total = total_amount + tax + shipping_fee
  const total = order_total.toFixed(2);

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  
  const submitHandler = async (event) => {
    event.preventDefault();

    if(!stripe || !elements) {
      return;
    }
    const {clientSecret} = await fetch("/create-payment-intent" , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentMethodType:'card', currency: 'cad' , amount: total}),
    }).then( r => r.json());

    console.log("clientSecret" , clientSecret);
    
    const {error: stripeError,paymentIntent} = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method: {
          card : elements.getElement(CardElement),
        }
      }
    )
      if(stripeError) {
        console.log("Card Error" , stripeError.message);
      }
    const postCart = {
      items: cart,
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      total: cartTotal(),
    }
    console.log(postCart);

    Axios.post('http://localhost:3001/order',
      {
        cart: postCart,
        "user_id": "1",
      })
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          navigate(`/orderComplete/${response.data}`);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const cartTotal = function () {
    let total = 0;
    cart.forEach(item => total += item.price);
    return total;
  }

  return (
    <div>
      <Header/>
      <br/>
      <br />
      <br />
      <br />
      <br />

      <br />


      <checkout>
        <div class="container">
          <main>
            <form id="payment-form" onSubmit={submitHandler}>
              <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-primary">Order Summary</span>
                    <span class="badge bg-primary rounded-pill">{cart.length}</span>
                  </h4>
                  <ul class="list-group mb-3">
                    {cart.map((item) => (
                      <div>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h5 class="my-0">{item.name}</h5>
                            <small >Qty:{item.amount}</small>
                          </div>
                          <span class="text-muted">${item.price * item.amount}</span>
                        </li>
                      </div>

                    ))}
                    <div>
                    <li class="list-group-item d-flex justify-content-between">
                      <strong>SubTotal (CAD)</strong>
                      <strong>${total_amount}</strong>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 class="my-0">Shipping Fee</h6>
                          </div>
                          <span class="text-muted">${shipping_fee}</span>
                     </li>
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 class="my-0">Tax</h6>
                          </div>
                          <span class="text-muted">${tax}</span>
                     </li>
                    </div>
                    <li class="list-group-item d-flex justify-content-between">
                      <strong>Total (CAD)</strong>
                      <strong>${total}</strong>
                    </li>
                  </ul>
                </div>
                <div class="col-md-7 col-lg-8">
                  <h4 class="mb-3">Billing address</h4>

                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label for="firstName" class="form-label">First name</label>
                      <input type="text" class="form-control" id="firstName" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)} required />
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">Last name</label>
                      <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} required />
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                      <input type="email" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="address">Address</label>
                      <input type="text" class="form-control" id="address" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} required />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
                    <hr class="my-4" />
                    <h4 class="mb-3">Payment</h4>
                    <CardElement />
                  </div>
                  <hr class="my-4" />
                  <button class="w-100 btn btn-primary" type="submit">Place Order</button>
                </div>
              </div>
            </form>
          </main>
        </div>
      </checkout>
      <br />

      <br />
      <br />
      <br />
      <br />

      <Footer />
    </ div>
  );
}