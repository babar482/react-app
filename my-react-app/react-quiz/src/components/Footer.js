import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
      <footer className="mt-5">
        <Container>
          <Row>
            {/* Contact Information */}
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                Email: info@example.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </Col>
  
            {/* Useful Links */}
            <Col md={4}>
              <h5>Useful Links</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>
  
            {/* Copyright Information */}
            <Col md={4}>
              <h5>&copy; 2023 Your Company</h5>
              <p>All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  
  export default Footer;