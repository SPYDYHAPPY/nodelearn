import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <h1>Hello World</h1>       
      </header>  
      <footer bg="dark" className="d-flex flex-wrap justify-content-between align-items-center py-2">
        <p class="col-md-3 mb-0 text-muted text-light">© 2022 Company, Inc</p>

        <a href="/" className="col-md-5 d-flex align-items-center justify-content-center mb-1 mb-md-0 me-md-auto link-dark text-decoration-none text-light">
          logo
        </a>

        <Nav class="d-flex col-md-3 justify-content-start">
          <Nav.Link href="#" className="px-2 text-muted">Home</Nav.Link>
          <Nav.Link href="#" className="px-2 text-muted">Features</Nav.Link>
          <Nav.Link href="#" className="px-2 text-muted">Pricing</Nav.Link>
          <Nav.Link href="#" className="px-2 text-muted">FAQs</Nav.Link>
          <Nav.Link href="#" className="px-2 text-muted">About</Nav.Link>
        </Nav>
      </footer>    
    </div>
  );
}

export default App;