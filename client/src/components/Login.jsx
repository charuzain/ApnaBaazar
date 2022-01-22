import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Axios from "axios";
import { useNavigate } from 'react-router-dom'; 


const Login = () => {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const login = (e) => {
    e.preventDefault();
    console.log("email", email);
    Axios.post('http://localhost:3001/login', 
    {email: email,
      password: password
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
      {/* <Header /> */}
      <div className='login-body'>
      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" 
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email Id" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" 
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password" />
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={login}>Sign in</button>
      </form>
      </div>

      <Footer />
    </div>

    
  );
};

export default Login;