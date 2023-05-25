import React from "react";
import "./Login.css";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import logos from "../assets/user.svg";

function AuthUser() {
  return (
    <>
      <section className="py-1 mb-1 mt-lg-5">
        <Container className="px-4 px-lg-5 my-3 overflow-hidden">
          <Row>
            <Col md={8}>
              <h3 className="text-left">Happy Shop</h3>
              <div className="d-flex overflow-hidden">
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
            </Col>
            <Col md={4}>
              <Form>
                <div className="text-center">
                  <img
                    className="mb-4"
                    src={logos}
                    alt="user"
                    width="82"
                    height="67"
                  />
                  <h1 className="h3 mb-3 fw-normal text-uppercase">
                    Profile Login
                  </h1>
                </div>

                <Row>
                  <Col md={12} className="mb-3">
                    <input
                      type="text"
                      name="Uname"
                      className="form-control rounded-pill"
                      placeholder="user name"
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <input
                      type="password"
                      name="Upass"
                      className="form-control rounded-pill"
                      placeholder="Password"
                    />
                  </Col>
                  <Form.Check
                    className="mb-3 mx-4"
                    type="checkbox"
                    label="Remember Me"
                  />
                </Row>

                <div className="d-flex gap-2 justify-content-end">
                  <Button
                    variant="outline-secondary"
                    className="w-25 rounded-pill"
                    size="sm"
                    type="reset"
                  >
                    Reset
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="w-25 rounded-pill"
                    size="sm"
                    type="submit"
                  >
                    Signin
                  </Button>
                </div>
              </Form>
              <div className="hstack gap-0 py-3">
                <a className="nav-link" href="/forgot-user">
                  <i class="bi bi-unlock"></i>forgot password ?
                </a>
                <a className="nav-link" href="/newuser">
                  <i class="bi bi-person"></i>register here
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export { AuthUser };
