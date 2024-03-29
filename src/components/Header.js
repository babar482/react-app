import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header >
     <Navbar expand="lg" bg="dark" data-bs-theme="dark"  >
      <Container fluid>
      <Navbar.Brand className={'text-white'}><Link to="/">Babar</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link as={Link} to="/project">Project</Nav.Link>

            <NavDropdown title="Review" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Raction3">Buyer Review</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Seller Review
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#">
             Contect us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="primary">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;
