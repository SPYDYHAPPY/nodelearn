import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (products) => {
    const response = await axios.get("http://localhost:3000/products");
    setProduct(response.data);
  };

  return (
    <>
      <section class="py-2 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-9">
              <h2 class="fw-bolder mb-4">ALL PRODUCTS</h2>
            </div>

            {/* SEARCH SECTION */}
            <div class="col-3">
              <form class="d-flex" role="search">
                <input
                  class="form-control form-control-sm me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-primary btn-sm" type="submit">
                  <i class="bi bi-arrow-right-circle-fill"></i>
                </button>
              </form>
            </div>
          </div>

          <div class="row gx-4 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center p-2">
            {/* CARD-1 */}
            {products.map((product, i) => {
              <div class="col-sm-4 mb-3">
                <div class="card h-100 shadow">
                  <span class="badge rounded-pill bg-primary text-white position-absolute">
                    {product.category}
                  </span>
                  <span class="badge rounded-pill bg-warning text-dark position-absolute">
                   {product.type}
                  </span>

                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">Shoe</h5>
                      <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="card-text me-2 text-primary">
                          {product.rating}
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
              </div>;
            })}

            {/*
            <div class="col-sm-4 mb-3">
               CARD-1 
              <div class="card h-100 shadow">
                <span
                  class="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  class="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div class="card-body p-4">
                  <div class="text-center">

                    <h5 class="fw-bolder">Shoe</h5>

                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span class="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div class="card-text text-left">Awesome Product</div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">

                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                   
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
                  */}

            {/* <div class="col-sm-4 mb-3">
               CARD-2 
              <div class="card h-100 shadow">

                <span
                  class="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  class="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div class="card-body p-4">
                  <div class="text-center">

                    <h5 class="fw-bolder">Shoe</h5>

                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span class="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div class="card-text text-left">Awesome Product</div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>*/}

            {/* <div class="col-sm-4 mb-3">
               CARD-3
              <div class="card h-100 shadow">

                <span
                  class="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  class="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div class="card-body p-4">
                  <div class="text-center">

                    <h5 class="fw-bolder">Shoe</h5>

                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span class="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div class="card-text text-left">Awesome Product</div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill mx-1"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="col-sm-4 mb-3">
               CARD-4 
              <div class="card h-100 shadow">

                <span
                  class="badge rounded-pill bg-primary text-white position-absolute">
                  Leather
                </span>
                <span
                  class="badge rounded-pill bg-warning text-dark position-absolute">
                  Footwear
                </span>

                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />


                <div class="card-body p-4">
                  <div class="text-center">

                    <h5 class="fw-bolder">Shoe</h5>

                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="card-text me-2 text-primary">
                        Rating : 4.0
                      </div>
                    </div>

                    <span class="text-muted text-decoration-line-through">
                      ₹2338.00
                    </span>
                    ₹1299
                  </div>
                  <div class="card-text text-left">Awesome Product</div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill mx-1"
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
export { AllProducts };
