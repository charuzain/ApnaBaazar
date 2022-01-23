import React from 'react';

const Header = () => {
  return (
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/featured">Featured Products</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products">Products</a>
              </li>


            </ul>
            <ul className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login">SignIn</a>
            </ul>
            <ul className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Register" >SignUp</a>
            </ul>
            <ul className="nav-item">
              {/* <!-- Icon --> */}
              <a class="text-reset me-3" href="/checkout">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </ul>
            {/* <!-- Right links --> */}

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

