import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../styles/home.css"


const Register = () => {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [shippingAddress, setshippingAddress] = useState("");

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    console.log("email", email);
    Axios.post('http://localhost:3001/register', {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone: phone,
      shipping_address: shippingAddress
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <Header />
      <div className='register-body container register-form'>
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="first_name" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationCustom01"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              placeholder="First Name" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>

          <div className="col-md-4">
            <label for="last_name" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationCustom02"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              placeholder="First Name" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>

          <div className="col-md-4">
            <label for="email" className="form-label">Email</label>
            <div className="input-group has-validation">
              {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Email" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <label for="password" className="form-label">Password</label>
            <div className="input-group has-validation">
              {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="Password" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <label for="phone" className="form-label">Phone</label>
            <div className="input-group has-validation">
              {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                placeholder="Phone" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <label for="shipping_address" className="form-label">Shipping Address</label>
            <div className="input-group has-validation">
              {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setshippingAddress(e.target.value);
                }}
                placeholder="Shipping Address" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>


          <div className="col-12">
            <button className="btn btn-primary" type="submit" onClick={register}>Sign Up</button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Register;