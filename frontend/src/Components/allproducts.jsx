import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      //const data = await response.json();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <>
      <section className="py-2 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-9">
              <h2 className="fw-bolder mb-4">ALL PRODUCTS</h2>
            </div>

            {/* SEARCH SECTION */}
            <div className="col-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control form-control-sm me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary btn-sm" type="submit">
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="row gx-4 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center p-2">
            {/* CARD-1 */}
            {products.map((product) => (
              <div class="col-sm-4 mb-3">
                <div class="card h-100 shadow">
                  <div className="row gx-1">
                    <div className="col">
                      <span class="badge rounded-pill bg-primary text-white position-absolute m-2">
                        {product.category}
                      </span>
                    </div>
                    <div className="col">
                      <span class="badge rounded-pill bg-warning text-dark position-absolute m-2">
                        {product.type}
                      </span>
                    </div>
                  </div>

                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{product.title}</h5>
                      <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="card-text me-2 text-primary">
                          Rating: {product.rating}
                        </div>
                      </div>
                      <span class="text-muted text-decoration-line-through">
                        ₹{product.price}
                      </span>
                      ₹1299
                    </div>
                    <div class="card-text text-left">{product.description}</div>
                  </div>

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <Link
                        class="btn btn-outline-dark mt-auto rounded-pill"
                        to="#"
                      >
                        view
                      </Link>

                      <Link
                        class="btn btn-outline-dark mt-auto rounded-pill mx-1"
                        to="#"
                      >
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/*
            <div className="col-sm-4 mb-3">
               CARD-1 
              <div className="card h-100 shadow">
                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">

                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                   
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
                  */}

            {/* <div className="col-sm-4 mb-3">
               CARD-2 
              <div className="card h-100 shadow">

                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>*/}

            {/* <div className="col-sm-4 mb-3">
               CARD-3
              <div className="card h-100 shadow">

                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-4 mb-3">
               CARD-4 
              <div className="card h-100 shadow">

                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export const Popularitems = () => {
  const [popularitems, setPopularitems] = useState([]);

  useEffect(() => {
    getPopularitems();
  }, []);

  const getPopularitems = async () => {
    try {
      const items = await axios.get("http://localhost:3000/store/PopularItem");
      setPopularitems(items.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <>
      <section className="py-2 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-9">
              <h2 className="fw-bolder mb-4 text-uppercase">
                Popular PRODUCTS
              </h2>
            </div>

            {/* SEARCH SECTION */}
            <div className="col-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control form-control-sm me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary btn-sm" type="submit">
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="row gx-4 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center p-2">
            {/* CARD-1 */}
            {popularitems.map((product) => (
              <div class="col-sm-4 mb-3">
                <div class="card h-100 shadow">
                  <div className="row gx-1">
                    <div className="col">
                      <span class="badge rounded-pill bg-primary text-white position-absolute m-2">
                        {product.category}
                      </span>
                    </div>
                    <div className="col">
                      <span class="badge rounded-pill bg-warning text-dark position-absolute m-2">
                        {product.type}
                      </span>
                    </div>
                  </div>

                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{product.title}</h5>
                      <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="card-text me-2 text-primary">
                          Rating: {product.rating}
                        </div>
                      </div>
                      <span class="text-muted text-decoration-line-through">
                        ₹{product.price}
                      </span>
                      ₹1299
                    </div>
                    <div class="card-text text-left">{product.description}</div>
                  </div>

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <Link
                        class="btn btn-outline-dark mt-auto rounded-pill"
                        to="#"
                      >
                        view
                      </Link>

                      <Link
                        class="btn btn-outline-dark mt-auto rounded-pill mx-1"
                        to="#"
                      >
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/*
            <div className="col-sm-4 mb-3">
               CARD-1 
              <div className="card h-100 shadow">
                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">

                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                   
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
                  */}

            {/* <div className="col-sm-4 mb-3">
               CARD-2 
              <div className="card h-100 shadow">

                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>*/}

            {/* <div className="col-sm-4 mb-3">
               CARD-3
              <div className="card h-100 shadow">

                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-sm-4 mb-3">
               CARD-4 
              <div className="card h-100 shadow">

                <span
                  className="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  className="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Shoe</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div className="card-text text-left">Awesome Product</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      className="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export const NewItems = () => {
  const [newarrival, setnewarrival] = useState([]);

  useEffect(() => {
    getNewitems();
  }, []);

  const getNewitems = async () => {
    try {
      const items = await axios.get("http://localhost:3000/store/NewArrival");
      setnewarrival(items.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <>
      <section className="py-2 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-9">
              <h2 className="fw-bolder mb-4 text-uppercase">
                NewArrival PRODUCTS
              </h2>
            </div>

            {/* SEARCH SECTION */}
            <div className="col-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control form-control-sm me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary btn-sm" type="submit">
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="row gx-4 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center p-2">
            {/* CARD-1 */}
            {newarrival.map((newproduct) => (
              <div class="col-sm-4 mb-3">
                <div class="card h-100 shadow">
                  <div className="row gx-1">
                    <div className="col">
                      <span class="badge rounded-pill bg-primary text-white position-absolute m-2">
                        {newproduct.category}
                      </span>
                    </div>
                    <div className="col">
                      <span class="badge rounded-pill bg-warning text-dark position-absolute m-2">
                        {newproduct.type}
                      </span>
                    </div>
                  </div>

                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{newproduct.title}</h5>
                      <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="card-text me-2 text-primary">
                          Rating: {newproduct.rating}
                        </div>
                      </div>
                      <span class="text-muted text-decoration-line-through">
                        ₹{newproduct.price}
                      </span>
                      ₹1299
                    </div>
                    <div class="card-text text-left">
                      {newproduct.description}
                    </div>
                  </div>

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <Link
                        class="btn btn-outline-dark mt-auto rounded-pill"
                        to="#"
                      >
                        view
                      </Link>

                      <Link
                        class="btn btn-outline-dark mt-auto rounded-pill mx-1"
                        to="#"
                      >
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
