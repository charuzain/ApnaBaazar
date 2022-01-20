import "./App.css";
//import useApplicationData from "./hooks/useEffect";
//import Checkout from "./components/Checkout";
//import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import "./index.css";
import SingleProductPage from "./pages/SingleProductPage";
// import axios from "axios";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/featured" element={<FeaturedProducts />}></Route>
      <Route path="products/:id" element={<SingleProductPage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
