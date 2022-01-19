import "../styles/header.css"

const Header = (props) => {
  console.log(props);
  return (
    <div className="main_container">
      <>
        <div className="mynav">
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            {/* <!-- Left links --> */}

            <div className="container-fluid">
              <a className="navbar-brand mb-0 h1"
                href="/" >
                <img className="d-inline-block align-top"
                  src="https://thumbs.dreamstime.com/b/vegetables-shopping-cart-trolley-grocery-logo-icon-design-vector-171090350.jpg"
                  width="30" height="30" />
                ApnaBazar
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/aboutus">AboutUs</a>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Fresh Produce</a></li>
                      <li><a className="dropdown-item" href="#">Pantry</a></li>
                      {/* <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                  </li>
                </ul>
              {/* <!-- Left links --> */}
              
              {/* <!-- Center links --> */}
                <form className="d-flex" >
                  <input className="form-control me-2 d-flex justify-content-center" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>
              {/* <!-- Center links --> */}

              {/* <!-- Right links --> */}
                <ul className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">SignIn</a>
                </ul>
                <ul className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/register" >Sign Up</a>
                </ul>
                <ul className="nav-item">
                {/* <!-- Icon --> */}
                  <a class="text-reset me-3" href="#">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </ul>
              {/* <!-- Right links --> */}

              </div>
            </div>
          </nav>
        </div>
      </>

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#cmyCarousel" data-slide-to="1" class="active"></li>
          <li data-target="#cmyCarousel" data-slide-to="2" class="active"></li>
          <li data-target="#cmyCarousel" data-slide-to="3" class="active"></li>
          <li data-target="#cmyCarousel" data-slide-to="" class="active"></li>
        </ol>

        <div className="carousel-inner">
          <div className=" carousel-item active">
            <div className="overlay-image">
              <img class="d-block w-100" src="https://us.123rf.com/450wm/indianfoodimages/indianfoodimages1806/indianfoodimages180600570/102977092-uncooked-pulses-grains-and-seeds-in-white-bowls-over-white-background-selective-focus.jpg?ver=6" alt="First slide" />
            </div>
            <div className="container">
              <h1>Title 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora cumque fugit voluptate placeat mollitia repudiandae voluptates beatae, impedit, ratione voluptatibus. Voluptatum fuga ipsum animi consectetur expedita magni sit nulla?</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="overlay-image">
                <img class="d-block w-100" src="https://sc01.alicdn.com/kf/UT8csCNXvxaXXagOFbXo/fresh-vegetables-from-india-fresh-vegetables-exporters.jpg_350x350.jpg" alt="Second slide" />

              </div>
              <h1>Title 2</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>Title 3</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>Title 4</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>Title 5</h1>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</p>
              <a href="#" className="btn btn-lg btn-success">
                More
              </a>
            </div>
          </div>
        </div>

        <a href="#myCarousel"
          className="carousel-control-prev" role="button"
          data-slide="prev">
          <span className="sr-only"></span>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>

        <a href="#myCarousel"
          className="carousel-control-next" role="button"
          data-slide="next">
          <span className="sr-only"></span>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>

      </div>

      <div className="body">
        <div className="body_container">
          <h1>Why Us</h1>
          <h4>{props.message}</h4>
          <a href="/register" className="btn btn-lg btn-primary">
            Sign Up Today!
          </a>
        </div>
      </div>

      <div className="product">
        <h1>Top Sellers</h1>
      </div>

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
                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                  <a href="#!">My Orders</a>
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
                  <a href="#!">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />
              {/* <!-- Grid column --> */}
              <div class="col-md-2 mx-auto">
              {/* <!-- Links --> */}
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact us</h5>
              <p><i class="fas fa-home mr-3"></i> 8905 Hwy 50 Unit 7, Vaughan, ON L4H 5A1</p>
              <p><i class="fas fa-envelope mr-3"></i> reach@apnabazaar.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>

            </div>
          {/* <!-- Grid row --> */}

          </div>
        {/* <!-- Footer Links --> */}

        <hr />

        {/* <!-- Call to action --> */}
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
          </li>
          <li class="list-inline-item">
            <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
          </li>
        </ul>
        {/* <!-- Call to action --> */}

        {/* <!-- Social buttons --> */}
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
              <i class="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
              <i class="fab fa-twitter"> </i>
            </a>
          </li>
        </ul>
        {/* <!-- Social buttons --> */}

        {/* <!-- Copyright --> */}
        <div class="footer-copyright text-center py-3">© 2022 ApnaBazaar. All rights reserved.
          {/* <a href="https://mdbootstrap.com/"> ApnaBazaar.ca</a> */}
        </div>
        {/* <!-- Copyright --> */}       
        </footer>
      </div>

    </div>





      );
};

      export default Header;


