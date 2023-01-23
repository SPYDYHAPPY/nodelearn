import React from "react";

function Sitetopnav() {
    
return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-10">
          <a className="navbar-brand position-relative" href="/">
            {/* <img src="/nav-logo.png" height="100" width="100" alt="logo" className="position-absolute top-50 start-0 translate-middle" /> */}
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
              className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">

              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/all-products">All Products</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="/newarrival">New Arrivals</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/why-us">About</a></li>
            </ul>
            <div className="d-flex justify-content-center">
              <a className="btn btn-outline-dark rounded-pill" href="/cart" title="Cart">
                <i className="bi-cart-fill me-1"></i>Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </a>
              <a className="btn btn-outline-dark rounded-pill mx-2" href="/user-login" title="login">
                <i className="bi-person"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
)


}

function Sitefooter() {
    return(
        <>
        <footer className="footer mt-0 py-3 bg-light">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="/all-products" className="nav-link px-2 text-muted">products</a></li>
          <li className="nav-item"><a href="/user-login" className="nav-link px-2 text-muted">login</a></li>
          <li className="nav-item"><a href="/why-us" className="nav-link px-2 text-muted">About</a></li>
        </ul>
        <p className="text-center text-muted">© 2021 Company, Inc</p>
      </footer>
        </>
    )

}
export {Sitetopnav, Sitefooter}