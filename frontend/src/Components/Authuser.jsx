import React from "react";
import "./Login.css";

function AuthUser() {
  return (
    <>
      <section className="py-1 mb-1 mt-lg-5">
        <div className="container px-4 px-lg-5 my-3 overflow-hidden">
          <div className="row">
            <div className="col-md-12 py-5">
              <h3 className="text-left">Happy Shop</h3>
              <div className="d-flex overflow-hidden" style="height: 330px;">
                <p>
                  A grocery store is another form of retailing, primarily
                  focusing on selling food, along with non-food household
                  products, such as bathroom or cleaning products, to their
                  consumers. Generally, most grocery stores will carry canned
                  items, fish, dairy products, raw and prepared meats, baked
                  products, fresh and frozen fruits and vegetables, and many
                  different snacks.1 Larger grocery stores, also known as
                  supermarkets, can carry non-food products, such as clothing
                  and household items due to the immense amount of space they
                  occupy and their large profit allowing them to reach a more
                  diverse consumer market, also allowing for consumers to find
                  all their needs in one area. Depending on their geographic
                  concentration, grocery stores will vary in size and products
                  they will carry to fit and satisfy their consumers needs. Some
                  examples of grocery stores or supermarket that excel in this
                  category are Loblaws, Metro and Sobeys.
                </p>
                <div className="vr mx-4"></div>
              </div>
            </div>
            <div className="col-md-4">
              <h3>hello</h3>
              <main className="form-signin">
                <form action="#" method="post">
                  <div className="text-center">
                    <img
                      className="mb-4"
                      src="assets/user.svg"
                      alt=""
                      width="82"
                      height="67"
                    />
                    <h1 className="h3 mb-3 fw-normal text-uppercase">
                      Profile Login
                    </h1>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <input
                        type="text"
                        name="Uname"
                        className="form-control rounded-pill"
                        placeholder="user name"
                      />
                    </div>

                    <div className="col-md-12 mb-3">
                      <input
                        type="password"
                        name="Upass"
                        className="form-control rounded-pill"
                        placeholder="Password"
                      />
                    </div>

                    <div className="checkbox mb-3 mx-4">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember
                        Me
                      </label>
                    </div>

                    <div className="d-flex gap-2 justify-content-end">
                      <button
                        className="w-25 btn btn-outline-secondary rounded-pill"
                        type="reset"
                      >
                        Reset
                      </button>
                      <button
                        className="w-25 btn btn-outline-primary rounded-pill"
                        type="submit"
                      >
                        Signin
                      </button>
                    </div>
                  </div>
                </form>
                <div className="hstack gap-0 py-3">
                  <a className="nav-link" href="/user-reset-pass">
                    <i className="bi-person-fill-gear"></i>forgot password ?
                  </a>
                  <a className="nav-link" href="/user-reg">
                    <i className="bi-person-fill-lock"></i>register here
                  </a>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthUser;
