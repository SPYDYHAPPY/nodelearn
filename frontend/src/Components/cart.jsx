import React from "react";

function Shopcart() {
    return (
        <>
            <section className="py-3 mb-auto mt-lg-auto">
                <div className="container px-5 px-lg-5 my-auto">
                    <div className="row">
                        <h3 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <button className="btn btn-outline-danger rounded-pill"><i className="bi bi-trash2"></i>
                                clear all
                                <span className="badge bg-secondary rounded-pill"></span>
                            </button>
                        </h3>

                        <div className="col-md-12 mb-4 w-100 overflow-auto">
                            <div className="container-sm p-1">
                                <ul className="list-group mb-2">
                                    <li className="border-0 list-group-item d-flex justify-content-between align-items-start alert bg-light alert-dismissible fade show"
                                        role="alert">
                                        <div className="ms-2 me-auto py-1">
                                            <span className="fw-bold badge bg-warning rounded-pill text-sm-start text-uppercase text-primary text-opacity-75">Chhapal</span>
                                            <span className="badge bg-primary rounded-pill text-sm-start mx-1">1</span>
                                            <span className="text-md-start mx-4 text-muted">Rs.1299 /-</span>
                                            <span className="text-md-start mx-4"> Total : Rs.1299/-</span>

                                            <a className="nav-link w-25" href="#">view</a>
                                        </div>
                                        <a className="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-0 list-group-item d-flex justify-content-between">
                            <span>Total (INR)</span>
                            <span><b id="total">Rs 1299 /-</b></span>
                        </div>
                        <div className="d-flex justify-content-end mt-1 py-1">
                            <button className="btn btn-outline-dark rounded-pill me-2" type="button">Cancel</button>
                            <button className="btn btn-outline-primary rounded-pill" type="submit">Place Order</button>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    );
}

export { Shopcart }