import "./App.css";
import {Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import FeaturedProducts from "./components/FeaturedProducts";
import "./index.css";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsPage from "./pages/ProductsPage";
import Home from "./components/Home";
import Login from "./components/Login";
// import Signup from "./components/Signup";
import Register from "./components/Register";
import Checkout from "./components/Checkout";

import Axios from "axios";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/featured" element={<FeaturedProducts />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>


      <Route path="products/:id" element={<SingleProductPage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
