import React, { useReducer, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';

export default function Order() {
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [total , setTotal] = useState('');
  const cartItems = [{ id: '1', name: 'Milk', price: 10 },
  { id: '1', name: 'Sushi', price: 10 },
  { id: '1', name: 'Chicken', price: 10 }];

  const submitHandler = event => {
    event.preventDefault();
    const cart = {
      items : cartItems,
      firstName: firstName,
      lastName:lastName,
      email:email,
      total:20,
    }
    console.log(cart);
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
                    <span class="badge bg-primary rounded-pill">3</span>
                  </h4>
                  <ul class="list-group mb-3">
                    {cartItems.map((item) => (
                      <div>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 class="my-0">{item.name}</h6>
                          </div>
                          <span class="text-muted">${item.price}</span>
                        </li>
                      </div>

                    ))}
                    <li class="list-group-item d-flex justify-content-between">
                      <span>Total (CAD)</span>
                      <strong>$20</strong>
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