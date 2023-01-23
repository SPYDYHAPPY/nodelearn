import React from "react";

function SpecialSale() {
    return (
        <>
        <section className="py-1 bg-light">
          <div className="container px-4 px-lg-5 my-4">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-4">
                <img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
              </div>
              <div className="col-md-8">
                <sub className="small mb-1 badge bg-primary text-capitalize">Rating: 4.0</sub>
                <sub className="small mb-1 badge bg-info text-uppercase">hair wash</sub>
                <sub className="small mb-1 badge bg-secondary text-uppercase">today sale</sub>
                <h1 className="display-5 fw-bolder">Sampoo</h1>
                <div class="fs-5 mb-4">
                  <span className="text-decoration-line-through">₹25.00 <i className="bi-tag fs-3 text-warning"></i></span>
                  <span>₹18.00</span>
                </div>
                <p className="lead">

                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo recusandae alias sint vel possimus velit modi. Doloremque exercitationem harum dolorem, porro atque illum doloribus velit totam soluta enim molestiae tenetur.
                </p>
                <span id="notification"></span>
                {/* <div class="hstack gap-2">
                  <form class="hstack gap-2" action="/cartsave" method="post" />
                  <input type="hidden" name="p_title" value="{{ p_title }}" />
                  <input type="hidden" name="p_price" value="{{ p_price }}" />
                  <a href="/product/" class="btn btn-outline-primary rounded-pill">Explore</a>
                <input class="form-control text-center rounded-pill" name="today_Sale" id="inputQuantity" type="num"
                  style="max-width: 5rem;" />
                </div> */}
                <button id="quantity" className="btn btn-outline-dark flex-shrink-0 rounded-pill" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default SpecialSale