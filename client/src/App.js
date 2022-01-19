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
      <Header message="Our mission is to bring the best ingredients from around the world, right to your doorstep. With a wide variety of authentic regional ingredients, we strive to reconnect people with the familiar flavor of India." />

    </div>
   
  );

  };

export default App;
