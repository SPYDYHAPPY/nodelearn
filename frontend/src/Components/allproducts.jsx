import { Sitefooter, Sitefooter } from "./Layouts/Sitelayout";
import React from "react";

function AllProducts() {
  return (
    <>
      {/* SITE TOPNAV */}
      <Sitetopnav />

      <section class="py-2 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-9">
              <h2 class="fw-bolder mb-4">Related products</h2>
            </div>
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
          <div class="row gx-4 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* {{#list products}} */}
            <div class="col mb-3">
              <div class="card h-100 shadow">
                {/* Sale badge */}
                <span
                  class="badge rounded-pill bg-primary text-white position-absolute"
                  style="top: 0.5rem; right: 0.4rem"
                >
                  {{ type }}
                </span>
                <span
                  class="badge rounded-pill bg-warning text-dark position-absolute"
                  style="top: 0.5rem; left: 0.2rem"
                >
                  {{ category }}
                </span>
                {/* Product image */}
                {/* <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /> */}
                <img
                  class="card-img-top"
                  src="assets/images/{{ filename }}"
                  height="300"
                  width="450"
                  alt="..."
                />
                {/* Product details */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* Product name */}
                    <h5 class="fw-bolder">{{ title }}</h5>
                    {/* Product reviews */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="card-text me-2 text-primary">
                        Rating : {{ rating }}.0
                      </div>
                    </div>
                    {/* Product price */}
                    <span class="text-muted text-decoration-line-through">
                      ₹38.00
                    </span>
                    ₹{{ price }}
                  </div>
                  <div class="card-text text-left">{{ description }}</div>
                </div>
                {/* Product actions */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      view
                    </a>
                    <a
                      class="btn btn-outline-dark mt-auto rounded-pill"
                      href="/product/{{ id }}"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* {{/list}} */}
          </div>
        </div>
      </section>
      {/* SITE FOOTER */}
      <Sitefooter />
    </>
  );
}
export { AllProducts }
