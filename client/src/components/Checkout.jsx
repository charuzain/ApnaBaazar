import React, {useReducer , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';

export default function Checkout() {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  return (
    <div>
    <Header />
    <checkout>
      
      <div class="container">
        <main>
        <form onSubmit={handleSubmit}>
          <div class="row g-5">
            <div class="col-md-5 col-lg-4 order-md-last">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-primary">Your cart</span>
                <span class="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$5</span>
                </li>
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
                    <input type="text" class="form-control" id="firstName" placeholder="" required/>
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder=""  required/>
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                  </div>
                </div>

                <hr class="my-4"/>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="same-address"/>
                      <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                  </div>

                  <hr class="my-4"/>
                    <h4 class="mb-3">Payment</h4>
                    <div class="row gy-3">
                      <div class="col-md-6">
                        <label for="cc-name" class="form-label">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                          <small class="text-muted">Full name as displayed on card</small>
                          <div class="invalid-feedback">
                            Name on card is required
                          </div>
                      </div>

                      <div class="col-md-6">
                        <label for="cc-number" class="form-label">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                          <div class="invalid-feedback">
                            Credit card number is required
                          </div>
                      </div>

                      <div class="col-md-3">
                        <label for="cc-expiration" class="form-label">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                          <div class="invalid-feedback">
                            Expiration date required
                          </div>
                      </div>

                      <div class="col-md-3">
                        <label for="cc-cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                          <div class="invalid-feedback">
                            Security code required
                          </div>
                      </div>
                    </div>
                    <hr class="my-4"/>
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