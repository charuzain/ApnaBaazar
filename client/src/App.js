import "./App.css";
import { Routes, Route } from "react-router-dom";
//import { useState, useEffect } from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import "./index.css";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsPage from "./pages/ProductsPage";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
// import Signup from "./components/Signup";
import Register from "./components/Register";
// import Checkout from "./components/Checkout";
import AboutUs from "./components/AboutUs";

//import Axios from "axios";
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
      <Route path="/orderComplete/:orderId" element={<OrderComplete />} />
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/login" element={<LoginForm />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/checkout" element={<Checkout />} /> */}
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
