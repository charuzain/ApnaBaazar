import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UsersProvider } from "./context/user_context";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

(async () => {
  const stripePromise = loadStripe(
    "pk_test_51KEn3kIsnJ9gK5pCAQHxj526A2Fp2fHijXR5iPAzQBeBuS7ggwyUhKoGkPFT7tVdKS7Je5sneHb948LizeDzXcx000QYuBrFDx"
  );
  ReactDOM.render(
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <UsersProvider>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </BrowserRouter>
          </UsersProvider>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>,

    document.getElementById("root")
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})();
