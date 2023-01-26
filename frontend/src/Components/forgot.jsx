import React from "react";
import "./Login.css";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import logos from '../assets/user.svg'

function Forgotpassword() {
    return (
        <>
            <section className="py-1 mb-1 mt-lg-5">
                <Container className="d-flex justify-content-center px-4 px-lg-5 my-3 overflow-hidden">
                    <main class="form-signin">
                        <Form>
                            <div className="text-center">
                                <img
                                    className="mb-4"
                                    src={logos}
                                    alt="user"
                                    width="82"
                                    height="67"
                                />
                                <h1 className="h3 mb-3 fw-normal text-uppercase">Profile Reset Password</h1>
                            </div>
                            <Row>
                                <Col md={12} className="mb-2">
                                    <input
                                        type="text"
                                        name="Uusername"
                                        className="form-control rounded-pill"
                                        placeholder="User Name"
                                    />
                                </Col>
                                <Col md={12} className="mb-2">
                                    <input
                                        type="email"
                                        name="Uemail"
                                        className="form-control rounded-pill"
                                        placeholder="demo@example.com"
                                    />
                                </Col>

                                <Col md={12} className="mb-2">
                                    <input
                                        type="date"
                                        name="Udob"
                                        className="form-control rounded-pill"
                                    />
                                </Col>

                                <Col md={12} className="mb-2">
                                    <input
                                        type="password"
                                        name="Upass"
                                        className="form-control rounded-pill"
                                        placeholder="Password"
                                    />
                                </Col>
                                <Form.Check className="mb-3 mx-4" type="checkbox" label="Remember Me" />
                            </Row>
                            <div className="d-flex gap-2 justify-content-end">
                                <Button
                                    variant="outline-secondary"
                                    className="w-50 rounded-pill"
                                    size="sm"
                                    type="reset">
                                    Cancel
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    className="w-50 rounded-pill"
                                    size="sm"
                                    type="submit"
                                >
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </main>
                </Container>
            </section>
        </>
    )
}

export { Forgotpassword }