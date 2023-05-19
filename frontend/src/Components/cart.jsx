import React from "react";

function Shopcart() {
    return (
        <>
            <section class="py-3 mb-auto mt-lg-auto">
                <div class="container px-5 px-lg-5 my-auto">
                    <div class="row">
                        <h3 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <button class="btn btn-outline-danger rounded-pill"><i class="bi bi-trash2"></i>
                                clear all
                                <span class="badge bg-secondary rounded-pill"></span>
                            </button>
                        </h3>

                        <div class="col-md-12 mb-4 w-100 overflow-auto">
                            <div class="container-sm p-1">
                                <ul class="list-group mb-2">
                                    <li class="border-0 list-group-item d-flex justify-content-between align-items-start alert bg-light alert-dismissible fade show"
                                        role="alert">
                                        <div class="ms-2 me-auto py-1">
                                            <span class="fw-bold badge bg-warning rounded-pill text-sm-start text-uppercase text-primary text-opacity-75">Chhapal</span>
                                            <span class="badge bg-primary rounded-pill text-sm-start mx-1">1</span>
                                            <span class="text-md-start mx-4 text-muted">Rs.1299 /-</span>
                                            <span class="text-md-start mx-4"> Total : Rs.1299/-</span>

                                            <a class="nav-link w-25" href="#">view</a>
                                        </div>
                                        <a class="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="border-0 list-group-item d-flex justify-content-between">
                            <span>Total (INR)</span>
                            <span><b id="total">Rs 1299 /-</b></span>
                        </div>
                        <div class="d-flex justify-content-end mt-1 py-1">
                            <button class="btn btn-outline-dark rounded-pill me-2" type="button">Cancel</button>
                            <button class="btn btn-outline-primary rounded-pill" type="submit">Place Order</button>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    );
}

export { Shopcart }