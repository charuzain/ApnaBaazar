import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import "./index.css";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsPage from "./pages/ProductsPage";
import Home from "./components/Home";
import Login from "./components/Login";
// import Signup from "./components/Signup";
import Register from "./components/Register";
// import Checkout from "./components/Checkout";

import Axios from "axios";
import Signup from "./components/Signup";
import Order from "./components/Order";
import OrderComplete from "./components/OrderComplete";
// import Checkout from "./components/Checkout";
import CartPage from "./pages/CartPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/featured" element={<FeaturedProducts />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="products/:id" element={<SingleProductPage />}></Route>
      <Route path="/checkout" element={<Order />}></Route>
      <Route path="/orderComplete" element={<OrderComplete />} />
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/checkout" element={<Checkout />} /> */}
    </Routes>
  );
};

export default App;
