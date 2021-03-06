// import React, { useState } from 'react';
// import Footer from './Footer';
// import Header from './Header';
// import Axios from "axios";
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [values, setValues] = useState({
//     first_name: '',
//     last_name:'',
//     password: '',
//     email: '',
//     confirm_password:'',
//     open: false,
//     error: ''
//   });

//   const navigate = useNavigate(); 

//   const handleChange = first_name => event => {
//     setValues({ ...values, [first_name]: event.target.value })
//   }

//   const clickSubmit = () => {
//     const user = {
//       first_name: values.first_name || undefined,
//       last_name: values.last_name || undefined,
//       email: values.email || undefined,
//       password: values.password || undefined,
//       confirm_password: values.confirm_password || undefined
//     }
//   }

//   const signUp = (e) => {
//     e.preventDefault();
//     console.log("email", email);
//     Axios.post('http://localhost:3001/login', {
//       first_name: first_name,
//       last_name: last_name,
//       email: email,
//       password: password,
//       confirm_password: confirm_password
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
//       <Header />
//       <div class="row">
//         <div class="col-md-6 offset-md-3">
//             <div class="signup-form">
//                 <form onSubmit={clickSubmit} class="mt-5 border p-4 bg-light shadow">
//                     <h4 class="mb-5 text-secondary">Create Your Account</h4>
//                     <div class="row">
//                         <div class="mb-3 col-md-6">
//                             <label>First Name<span class="text-danger">*</span></label>
//                             <input id="first_name" type="text" name="fname" class="form-control" placeholder="Enter First Name" value={values.first_name} onChange={handleChange('first_name')}/>
//                         </div>

//                         <div class="mb-3 col-md-6">
//                             <label>Last Name<span class="text-danger">*</span></label>
//                             <input id="last_name" type="text" name="lname" class="form-control" placeholder="Enter Last Name" value={values.last_name} onChange={handleChange('last_name')}/>
//                         </div>
//                         <div class="mb-3 col-md-12">
//                             <label>Email<span class="text-danger">*</span></label>
//                             <input id="email" type="email" name="email" class="form-control" placeholder="Enter Email" value={values.email} onChange={handleChange('email')} />
//                         </div>
//                         <div class="mb-3 col-md-12">
//                             <label>Password<span class="text-danger">*</span></label>
//                             <input id="password" type="password" name="password" class="form-control" placeholder="Enter Password" value={values.password} onChange={handleChange('password')}/>
//                         </div>
//                         <div class="mb-3 col-md-12">
//                             <label>Confirm Password<span class="text-danger">*</span></label>
//                             <input id="confirm_password" type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password" value={values.confirm_password} onChange={handleChange('confirm_password')}/>
//                         </div>
//                         <div class="col-md-12">
//                            <button class="btn btn-primary float-end" type="submit" onClick={signUp}>Signup</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//     <Footer />
//     </div>
//   )
// };