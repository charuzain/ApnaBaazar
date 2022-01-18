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
      <Header message="Welcome" />

    </div>
   
  );

  };

export default App;
