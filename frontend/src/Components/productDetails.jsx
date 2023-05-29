import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const Singleproduct = () => {
  const [Sproduct, setSproduct] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getproductDetails();
  }, []);

  const getproductDetails = async () => {
    try {
      const Happy = await axios.get(`http://localhost:3000/product/${id}`);
      const Product = setSproduct(Happy.data);
      console.log(Product);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-3">
          <div className="row gx-3 gx-lg-5">
            <div className="col-9">
              <Link to={"/allproducts"}>
                <i className="h2 bi bi-arrow-left-square-fill"></i>
              </Link>
              <h2 className="fw-bolder mb-4">PRODUCT DETAILS</h2>
            </div>
            <div className="card mb-3" style={{ maxWidth: "1140px" }}>
              <div className="row g-0">
                <div className="col my-4">
                  <span class="badge rounded-pill bg-primary text-white position-absolute m-2">
                    {Sproduct.category}
                  </span>
                </div>
                <div className="col">
                  <span class="badge rounded-pill bg-warning text-dark position-absolute m-2">
                    {Sproduct.type}
                  </span>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
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
                      {Sproduct.description}This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer.
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
        </div>
      </section>
    </>
  );
};
