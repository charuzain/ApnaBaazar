import "../styles/header.css"

const Header = (props) => {
  console.log(props);
  return (
    <div className="main_container">
      <>
        <div className="mynav">
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

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
                  {/* <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li> */}
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


                <ul className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">SignIn</a>
                </ul>
                <ul className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/register" >Sign Up</a>
                </ul>
                {/* <div className="accountInfo">
                <span>Sign In</span>
                <span class="separator">|</span>
                <span>Register</span>
                </div> */}

                <form className="d-flex" >
                  <input className="form-control me-2 d-flex justify-content-center" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>

              </div>
            </div>
          </nav>
        </div>

      </>

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#cmyCarousel" data-slide-to="1" class="active"></li>
        </ol>

        <div className="carousel-inner">
          <div className=" carousel-item active">
            <div className="container">
              <img class="d-block w-100" src="https://us.123rf.com/450wm/indianfoodimages/indianfoodimages1806/indianfoodimages180600570/102977092-uncooked-pulses-grains-and-seeds-in-white-bowls-over-white-background-selective-focus.jpg?ver=6" alt="First slide" />
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora cumque fugit voluptate placeat mollitia repudiandae voluptates beatae, impedit, ratione voluptatibus. Voluptatum fuga ipsum animi consectetur expedita magni sit nulla?</h2>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
            <img class="d-block w-100" src="https://seelandonline.de/wp-content/uploads/2020/10/price-table-bg.jpg" alt="Second slide" />
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus beatae cum repudiandae. Beatae, alias. Placeat, laudantium eveniet inventore omnis doloribus ipsam rem expedita ad corporis autem rerum voluptatibus vero.</h2>
            </div>
          </div>
        </div>

        <a href="#myCarousel" 
        className="carousel-control-prev" role="button"
        data-slide="prev">
          <span className="sr-only">Previous</span>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>

        <a href="#myCarousel" 
        className="carousel-control-next" role="button"
        data-slide="next">
          <span className="sr-only">Next</span>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>

      </div>

      <div className="body">
        <div className="body_container">
          <h2>{props.message}</h2>
          <a href="/register" className="btn btn-lg btn-success">
            Sign Up Today!
          </a>
        </div>
      </div>


      <div className="footer">

      </div>


    </div>




  );
};

export default Header;


