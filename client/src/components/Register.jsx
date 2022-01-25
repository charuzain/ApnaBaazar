// import React, { useState } from 'react';
// import Footer from './Footer';
// import Header from './Header';
// import Axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const Register = () => {

//   const[firstName, setfirstName] = useState("");
//   const[lastName, setlastName] = useState("");
//   const[email, setemail] = useState("");
//   const[password, setpassword] = useState("");
//   const[phone, setphone] = useState("");
//   const[shippingAddress, setshippingAddress] = useState("");

//   const navigate = useNavigate(); 

//   const register = (e) => {
//     e.preventDefault();
//     console.log("email", email);
//     Axios.post('http://localhost:3001/register', {
//       first_name: firstName,
//       last_name: lastName, 
//       email: email,
//       password: password,
//       phone: phone,
//       shipping_address: shippingAddress
//     })
//     .then((response) => {
//       console.log(response);
//       if (response.status === 200) {
//         navigate('/');
//       } 
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   }

//   return (
//     <div>
//       {/* <Header /> */}
//       <div className='register-body'>
//         <form className="row g-3 needs-validation" novalidate>
//           <div className="col-md-4">
//             <label for="first_name" className="form-label">First name</label>
//             <input type="text" className="form-control" id="validationCustom01" 
//             onChange={(e) => {
//               setfirstName(e.target.value);
//             }}
//             placeholder="First Name" required />
//             <div className="valid-feedback">
//               Looks good!
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label for="last_name" className="form-label">Last name</label>
//             <input type="text" className="form-control" id="validationCustom02" 
//             onChange={(e) => {
//               setlastName(e.target.value);
//             }}
//             placeholder="First Name" required />
//             <div className="valid-feedback">
//               Looks good!
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label for="email" className="form-label">Email</label>
//             <div className="input-group has-validation">
//               {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
//               <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" 
//               onChange={(e) => {
//                 setemail(e.target.value);
//               }}
//               placeholder="Email" required />
//               <div className="invalid-feedback">
//                 Please choose a username.
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label for="password" className="form-label">Password</label>
//             <div className="input-group has-validation">
//               {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
//               <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" 
//               onChange={(e) => {
//                 setpassword(e.target.value);
//               }}
//               placeholder="Password" required />
//               <div className="invalid-feedback">
//                 Please choose a username.
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label for="phone" className="form-label">Phone</label>
//             <div className="input-group has-validation">
//               {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
//               <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" 
//               onChange={(e) => {
//                 setphone(e.target.value);
//               }}
//               placeholder="Phone" required />
//               <div className="invalid-feedback">
//                 Please choose a username.
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <label for="shipping_address" className="form-label">Shipping Address</label>
//             <div className="input-group has-validation">
//               {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
//               <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" 
//               onChange={(e) => {
//                 setshippingAddress(e.target.value);
//               }}
//               placeholder="Shipping Address" required />
//               <div className="invalid-feedback">
//                 Please choose a username.
//               </div>
//             </div>
//           </div>


//           <div className="col-12">
//             <button className="btn btn-primary" type="submit" onClick={register}>Sign Up</button>
//           </div>
//         </form>
//       </div>

//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Register;
import { useState, useEffect } from 'react'
import { useUsersContext } from '../context/user_context'
import FormRow from './FormRow'
import Alert from './Alert'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
 
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  console.log(useUsersContext());
  const { user,isLoading, showAlert, displayAlert, registerUser,loginUser} = useUsersContext()
// console.log({user});
  // console.log(state);


  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      console.log('already member');
      loginUser(currentUser)
      } else {
      registerUser(currentUser)
      }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>{values.isMember ? 'Login' : 'Register' }</h3>
        {showAlert && <Alert/>}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
          
          )}

        <FormRow
        type='email'
        name='email'
        value={values.email}
        handleChange={handleChange}
         />


        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Register