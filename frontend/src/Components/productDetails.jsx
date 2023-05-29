import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const Singleproduct = () => {
  const [Sproduct, setSproduct] = useState([]);
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getproductDetails();
    getAllProducts();
  }, []);

  const getproductDetails = async () => {
    try {
      const Happy = await axios.get(`http://localhost:3000/product/${id}`);
      setSproduct(Happy.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  // Function to generate random number
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const Itemlist = products.slice(random(2,5), random(5,8));

  return (
    <>
      <section className="py-3 bg-light">
        <div className="container px-5 px-lg-5 mt-3">
          <div className="row gx-3 gx-lg-2">
            <div className="col-8">
              <h2 className="fw-bolder mb-4">
                <Link to={"/allproducts"}>
                  <i className="h2 bi bi-arrow-left-square-fill mx-2"></i>
                </Link>
                PRODUCT DETAILS
              </h2>

              <div className="card mb-3" style={{ maxWidth: "1040px" }}>
                <div className="row g-0">
                  <div className="col my-4">
                    <span className="badge rounded-pill bg-primary text-white position-absolute m-2">
                      {Sproduct.category}
                    </span>
                  </div>
                  <div className="col">
                    <span className="badge rounded-pill bg-warning text-dark position-absolute m-2">
                      {Sproduct.type}
                    </span>
                  </div>
                  <div className="col-md-4">
                    <img
                      src="https://dummyimage.com/800x800/dee2e6/6c757d.jpg"
                      className="img-thumbnail rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title fw-bolder my-2">
                        {Sproduct.title}
                      </h3>
                      <p className="card-text">
                        {Sproduct.description}This is a wider card with
                        supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.
                      </p>
                      <p className="card-text">price: Rs.{Sproduct.price}/-</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Rating: {Sproduct.rating}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bolder mb-4 text-uppercase">Store items</h5>
              <>
                {Itemlist.map((product) => (
                  <div className="row">
                    <div className="col-sm-12 mb-2">
                      <div className="card h-100">
                        <div className="row gx-0">
                          <div className="col">
                            <span className="badge rounded-pill bg-warning text-dark position-absolute m-1">
                              {product.type}
                              <span className="badge rounded-pill bg-primary text-white position-absolute m-1">
                                {product.rating}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="card-body my-2">
                          <div className="text-left row">
                            <div className="col-8">
                              <h5 className="card-title fw-bolder">
                                {product.title}
                              </h5>
                            </div>
                            <div className="col-4">
                              <span className="text-muted text-decoration-line-through">
                                ₹{product.price}
                              </span>
                              ₹1299
                            </div>
                            <div className="card-text text-left col-9">
                              {product.description}
                            </div>
                            <div className="col-3">
                              <Link
                                className="btn btn-sm btn-outline-info bi bi-arrow-right-short rounded-pill"
                                to={`/store/${product.id}`}
                              >cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
              <Link
                className="btn btn-block btn-sm btn-outline-info text-dark fw-bolder mt-auto bi bi-arrow-right-short"
                to={"/allproducts"}
              >
                view more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
