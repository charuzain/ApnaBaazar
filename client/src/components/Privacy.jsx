import React from 'react';
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';

export default function privacy() {
  return (
    <Wrapper>
      <div className='body-container'>
        <Header />
        <div class="about-section">
          <h1>Privacy </h1>
          <p>This privacy policy discloses the privacy practices for www.apnabasket.ca. This privacy policy applies solely to information collected by this web site. It will notify you of the following:

            What personally identifiable information is collected from you through the web site, how it is used and with whom it may be shared.

            What choices are available to you regarding the use of your data.

            The security procedures in place to protect the misuse of your information.

            How you can correct any inaccuracies in the information.

            Information Collection, Use, and Sharing
            We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.

            We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.

            Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.

            Your Access to and Control Over Information
            You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
            <ol>
              <li>See what data we have about you, if any.</li>
              <li>Change/correct any data we have about you.</li>
              <li>Have us delete any data we have about you.</li>
              <li>Express any concern you have about our use of your data.</li>
            </ol>
          </p>

          <h4>Security</h4>
          <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.

            Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for "https" at the beginning of the address of the web page.

            While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>

          <h4>Updates</h4>
          <p>Our Privacy Policy may change from time to time and all updates will be posted on this page.

            If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 647-465-3804 or via email customercare@apnabazaar.ca</p>



        </div>
      </div>


      <Footer />
    </Wrapper>
  );
} const Wrapper = styled.section`
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
