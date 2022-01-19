import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';
import Header from './components/Header';
import Login from  './components/Login';
import Register from './components/Register';


const App = () => {
  const [message, setMessage] = useState('Hello!!');

  return (
    <div >
      <Header message="Our mission is to bring the best ingredients from around the world, right to your doorstep. With a wide variety of authentic regional ingredients, we strive to reconnect people with the familiar flavor of India.
      We offer a full variety of name brand products, fresh produce, hot indian snack and fresh sweets. Our best asset is our great staff of fast, friendly and courteous employees that make sure our customers have a pleasant shopping experience. You can also find lottery tickets, masalas and a smoke shop at this indian store. When you next shop for groceries, call on Apna Bazaar, we look forward to serving you!" />

    </div>
   
  );

  };

export default App;
