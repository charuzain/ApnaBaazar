// import React from 'react';
// import Footer from './Footer';
// // import Header from './Header';
// import { useState, useEffect } from 'react';
// import { useNavigate  } from 'react-router';
// import axios from 'axios';

// const Login = () => {
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }


//     const submit =()=>{
//     useEffect(() => {
      
    
//     axios.post('/login', {
//       email: email,
//       password: password
//     }).then(res => {
//       console.log(res)
//       // const user = res.data
//       // localStorage.setItem('user', JSON.stringify(user));
//       // localStorage.setItem('username', user.name);

//       navigate('/')

//     }).catch((error) => {
//       console.error(error)
//     })
//     }, [])
//   }



//   return (
//     <div>
      
//       <div className='login-body'>
//         <form onSubmit={handleSubmit}>
//         <div class="row mb-3">
//           <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//           <div class="col-sm-10">
//             <input type="email" class="form-control" id="inputEmail3"
//              placeholder="Email Id" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//           </div>
//         </div>
//         <div class="row mb-3">
//           <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//           <div class="col-sm-10">
//             <input type="password" class="form-control" id="inputPassword3"
//              placeholder="Password" 
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//              />
//           </div>
//         </div>

//         <button type="submit" class="btn btn-primary" onClick={()=>submit()}>Sign in</button>
//       </form>
//       </div>

//       <Footer />
//     </div>

    
//   );
// };

// export default Login;