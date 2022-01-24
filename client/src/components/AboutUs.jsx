import React from 'react';
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';

export default function AboutUs() {
  return (
    <Wrapper>
      <div className='body-container'>
      <Header /> 
      <div class="about-section">
    <h1>About Us </h1>
    <p>ApnaBazaar is an online grocery delivery service exclusively designed for Indian, Pakistani, Bangladesh & Sri-Lankan community-based grocery buyers to save their time and effort!.</p>
    <h2>Easy and Fast delivery</h2>
    <p>Easy and Fast Delivery
We deliver groceries across GTA and Canada. ApnaBazaar shoppers are expert professional grocery pickers and they ensure to select the groceries as per the customer needs.
We also started serving the rest of the locations with Canadapost currently.</p>
    <h2>Desi Goodness across Canada</h2>
    <p>ApnaBazaar delivers desi goodness across Canada, where over 5000+Asian Groceries and staples are delivered right to your homes, at your doorstep. Our expert grocery pickers, ensure to select the groceries as per your needs and instructions. Our onlinegrocery delivery is the first service that lets you shop your favorite Groceries from the comfort of your home and with ease. </p>
  </div>
  </div>
  
  <div class ="about_team">
   <h2 >Our Team</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Charu Jain</h2>
          <p>charuabhizain@gmail.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Rajini Amithap</h2>
          <p>rajini1608@gmail.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
          <div class="container">
          <h2>Gouthami</h2>
          <p>gouthami.sep@gmail.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div> 
      </div>
     
  <Footer />
  </Wrapper>
  );
}const Wrapper = styled.section`
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  margin-top: 20px;
  padding: 50px;
  text-align: left;
  background-color: orange;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
.about_team {
  text-align: left; 
}`
