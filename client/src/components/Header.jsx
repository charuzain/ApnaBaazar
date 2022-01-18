const Header = (props) => {
  console.log(props);
  return (
    <div>
<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ApnaBazar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        

        <ul className="nav-item">
            <a className="nav-link active" aria-current="page" href="/login">SignIn</a>
          </ul>
          <ul className="nav-item">
            <a className="nav-link active" aria-current="page" href="/register">Register</a>
          </ul>
        {/* <div className="accountInfo">
          <span>Sign In</span>
          <span class="separator">|</span>
          <span>Register</span>
        </div> */}

        <form className="d-flex" >
          <input className="form-control me-2 d-flex justify-content-center" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        
        
      </div>
    </div>
  </nav>

  
  </>

      <h2>{props.message}</h2>

      
    </div>

    
  
  
  );
};

export default Header;

