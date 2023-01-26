import React from "react";
import "./Login.css";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import logos from '../assets/user.svg'

function Registeruser() {
    return (
        <>
            <section className="py-1 mb-1 mt-lg-5">
                <Container className="px-4 px-lg-5 my-3 overflow-hidden">
                    <Row>
                        <Col md={7}>
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
                        <Col md={5}>
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
                                        Profile Register
                                    </h1>
                                </div>

                                <Row>
                                    <Col md={6} className="mb-2">
                                        <input
                                            type="text"
                                            name="Ufullname"
                                            className="form-control rounded-pill"
                                            placeholder="Full Name"
                                        />
                                    </Col>
                                    <Col md={6} className="mb-2">
                                        <input
                                            type="text"
                                            name="Uusername"
                                            className="form-control rounded-pill"
                                            placeholder="User Name"
                                        />
                                    </Col>
                                    <Col md={6} className="mb-2">
                                        <input
                                            type="email"
                                            name="Uemail"
                                            className="form-control rounded-pill"
                                            placeholder="demo@example.com"
                                        />
                                    </Col>

                                    <Col md={6} className="mb-2">
                                        <input
                                            type="date"
                                            name="Udob"
                                            className="form-control rounded-pill"
                                        />
                                    </Col>

                                    <Col md={6} className="mb-2">
                                        <Form.Select className="form-control rounded-pill"
                                            aria-label="Default select example" name="Ugender">
                                            <option name="" selected>Gender</option>
                                            <option name="male" value="male">Male</option>
                                            <option name="female" value="female">Female</option>
                                            <option name="others" value="others">Others</option>
                                        </Form.Select>
                                    </Col>

                                    <Col md={6} className="mb-2">
                                        <input
                                            type="password"
                                            name="Upass"
                                            className="form-control rounded-pill"
                                            placeholder="Password"
                                        />
                                    </Col>
                                    <Col md={6} className="mb-2">
                                        <input
                                            type="password"
                                            name="Ucnfpass"
                                            className="form-control rounded-pill"
                                            placeholder="Conform Password" />
                                    </Col>

                                    <Form.Check className="mb-3 mx-4" type="checkbox" name="terms" label="Agree to our terms and conditions" />
                                </Row>

                                <div className="d-flex gap-2 justify-content-end">
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        className="w-25 rounded-pill"
                                        type="reset"
                                    >
                                        Reset
                                    </Button>
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="w-25 rounded-pill"
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </div>
                            </Form>
                            <div className="hstack gap-0 py-3">
                                <a className="nav-link" href="/userauth">
                                    <i className="bi-person-fill-lock"></i>Login Here
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}
export {Registeruser} 