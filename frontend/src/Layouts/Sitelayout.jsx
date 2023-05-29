import React from "react";
import BrandLogo from "../assets/nav-logo.png";
import { Link } from "react-router-dom";

export const Sitetopnav = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-10">
          <Link className="navbar-brand position-relative" to="/">
            <img
              src={BrandLogo}
              height="100"
              width="100"
              alt="logo"
              className="position-absolute top-50 start-0 translate-middle"
            />
          </Link>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/allproducts">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/popular">
                      Popular Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/newitems">
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-outline-dark rounded-pill" to="/mycart">
                <i className="bi-cart-fill me-1"></i>Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </Link>
              <Link
                to="/Userlogin"
                className="btn btn-outline-dark rounded-pill mx-2"
                title="login"
              >
                <i class="bi bi-person-lock"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export const Sitefooter = () => {
  return (
    <>
      <footer className="footer mt-0 py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              <i class="bi bi-house"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="/allproducts" className="nav-link px-2 text-muted">
              <i class="bi bi-cart4"></i> products
            </a>
          </li>
          <li className="nav-item">
            <Link to="/Userlogin" className="nav-link px-2 text-muted">
              <i class="bi bi-file-lock"></i> login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Userlogin" className="nav-link px-2 text-muted">
              <i class="bi bi-person-fill-exclamation"></i> staff
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link px-2 text-muted">
              <i class="bi bi-link-45deg"></i> About
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">
          Copyright © {new Date().getFullYear() - 1}-{new Date().getFullYear()}{" "}
          Company, Inc
        </p>
      </footer>
    </>
  );
};
