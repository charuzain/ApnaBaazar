import "./App.css";
import { Routes, Route } from "react-router-dom";
//import { useState, useEffect } from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import "./index.css";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsPage from "./pages/ProductsPage";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
<<<<<<< HEAD
import Error from "./components/Error";
=======
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
>>>>>>> feature/footerUpdate

//import Axios from "axios";
import Order from "./components/Order";
import OrderComplete from "./components/OrderComplete";
// import Checkout from "./components/Checkout";
import CartPage from "./pages/CartPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="products/:id" element={<SingleProductPage />}></Route>
      <Route path="/checkout" element={<Order />}></Route>
      <Route path="/orderComplete/:orderId" element={<OrderComplete />} />
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutus" element={<AboutUs />} />
<<<<<<< HEAD
      <Route path="/*" element={<Error />} />
=======
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
>>>>>>> feature/footerUpdate

    </Routes>
  );
};

export default App;
