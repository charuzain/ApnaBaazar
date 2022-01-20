import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import FeaturedProducts from "./components/FeaturedProducts";
import './index.css';
import SingleProductPage from "./pages/SingleProductPage";
// import axios from "axios";

// import { Fresh } from "./components/Fresh";

const App = () => {
  // const [fresh, setFresh] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:3001/api/products").then((res) => {
  //     setFresh(res.data);
  //     console.log(res.data)

  //   });
  // }, []);

  return (
  <Routes>
      {/* <Fresh fresh={fresh}/> */}
      <Route path='/products' element={<FeaturedProducts />}></Route>
      <Route path='products/:id' element={<SingleProductPage />}></Route>

    </Routes>
  );
};

export default App;
