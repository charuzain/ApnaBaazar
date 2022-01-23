import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Axios from "axios";
import { useNavigate } from 'react-router-dom'; 


const Login = () => {


  return (
    <div>
      
      <div className='login-body'>
        <form >
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3"
             placeholder="Email Id" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3"
             placeholder="Password" 
              
             />
          </div>
        </div>

        <button type="submit" class="btn btn-primary" >Sign in</button>
      </form>
      </div>

      <Footer />
    </div>

    
  );
};

export default Login;