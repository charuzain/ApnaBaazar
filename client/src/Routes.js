import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './components/Home'

import Login from  './components/Login';
import Register from './components/Register';

class Routes extends React.Component{
  render() {
    return(
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/login" element={<Login />} /> 
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default Routes;