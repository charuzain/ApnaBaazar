import React, { useReducer, useState } from 'react';
import Footer from './Footer';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Order() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpire, setCardExpire] = useState('');
  const [total, setTotal] = useState('');
  const cartItems = [{ product_id: '4', name: 'Milk', quantity: 4, price: 15 },
  { product_id: '1', name: 'Sushi', quantity: 1, price: 15 },
  { product_id: '2', name: 'Chicken', quantity: 2, price: 20 },
  { product_id: '3', name: 'Eggs', quantity: 3, price: 30 },
  { product_id: '5', name: 'Atta', quantity: 3, price: 30 }];

  const submitHandler = event => {
    event.preventDefault();
    const cart = {
      items: cartItems,
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      total: cartTotal(),
    }
    console.log(cart);

    Axios.post('http://localhost:3001/order',
      {
        cart: cart,
        "user_id": "1",
      })
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          navigate('/orderComplete');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const cartTotal = function () {
    let total = 0;
    cartItems.forEach(item => total += item.price);
    return total;
  }

  return (
    <div>
      <checkout>
        <div class="container">
          <main>
            <form onSubmit={submitHandler}>
              <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-primary">Your cart</span>
                    <span class="badge bg-primary rounded-pill">{cartItems.length}</span>
                  </h4>
                  <ul class="list-group mb-3">
                    {cartItems.map((item) => (
                      <div>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h5 class="my-0">{item.name}</h5>
                            <small class="my-0">Qty:{item.quantity}</small>
                          </div>
                          <span class="text-muted">${item.price}</span>
                        </li>
                      </div>

                    ))}
                    <li class="list-group-item d-flex justify-content-between">
                      <strong>Total (CAD)</strong>
                      <strong>Total Items ({cartItems.length}) : ${cartTotal()}</strong>
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
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cardName" placeholder="" onChange={(e) => setCardName(e.target.value)} required />
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cardNumber" placeholder="" onChange={(e) => setCardNumber(e.target.value)} required />
                        <div class="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cardExpire" placeholder="" required />
                        <div class="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="cc-expiration">CVV</label>
                        <input type="text" class="form-control" id="cardCvv" placeholder="" onChange={(e) => setCardCvv(e.target.value)} required />
                        <div class="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                  <button class="w-100 btn btn-primary" type="submit">Place Order</button>
                </div>
              </div>
            </form>
          </main>
        </div>

      </checkout>

      <Footer />
    </ div>
  );
}