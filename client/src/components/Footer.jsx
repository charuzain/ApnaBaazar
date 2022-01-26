import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <footer class="page-footer font-small stylish-color-dark pt-4">
        {/* <!-- Footer Links --> */}
          <div class="container text-center text-md-left">
          {/* <!-- Grid row --> */}
            <div class="row">
              {/* <!-- Grid column --> */}
              <div class="col-md-4 mx-auto">
              {/* <!-- Content --> */}
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Apna Bazaar</h5>
                <p>Simply Desi Simply Apna Bazaar.</p>
                <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
              <i class="fab fa-facebook-f" > </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
              <i class="fab fa-twitter"> </i>
            </a>
          </li>
        </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />
              {/* <!-- Grid column --> */}
              <div class="col-md-2 mx-auto">
              {/* <!-- Links --> */}
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">My Account</h5>
              {/* <!-- Grid column --> */}
              <ul class="list-unstyled">
                <li>
                  <a href="#!">My Profile</a>
                </li>
                <li>
                  <a href="/cart">My Orders</a>
                </li>
              </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />
              {/* <!-- Grid column --> */}
              <div class="col-md-2 mx-auto">
              {/* <!-- Links --> */}
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Our Services</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="/terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />
              {/* <!-- Grid column --> */}
              <div class="col-md-2 mx-auto">
              {/* <!-- Links --> */}
              {/* <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact us</h5>
              <p><i class="fas fa-home mr-3"></i> 8905 Hwy 50 Unit 7, Vaughan, ON L4H 5A1</p> */}
              <p><i class="fas fa-envelope mr-3"></i> reach@apnabazaar.com</p>
              <p> Response time is 24 - 48 hours.</p>
              {/* <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
              </div>

            </div>
          {/* <!-- Grid row --> */}

          </div>
        {/* <!-- Footer Links --> */}

        <hr />

        {/* <!-- Call to action --> */}
        {/* <ul class="list-unstyled list-inline text-center py-1">
          <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
          </li>
          <li class="list-inline-item">
            <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
          </li>
        </ul> */}
        {/* <!-- Call to action --> */}

        {/* <!-- Social buttons --> */}
       
        {/* <!-- Social buttons --> */}

        {/* <!-- Copyright --> */}
        <div class="footer-copyright text-center py-1">© 2022 ApnaBazaar. All rights reserved.
          {/* <a href="https://mdbootstrap.com/"> ApnaBazaar.ca</a> */}
        </div>
        {/* <!-- Copyright --> */}       
        </footer>
      </div>
  );
};

export default Footer;