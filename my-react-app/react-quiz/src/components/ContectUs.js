import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function ContectUs(){
    return(
        <>
         <div className="container contect" >
      <h1 className="text-start">ContectUs</h1>
      <Form className="mx-auto">
        <Row>
          <Col xs={4}>
            <Form.Control placeholder="First name" />
          </Col>
          <Col xs={4}>
            <Form.Control placeholder="Phone" />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Form.Control placeholder="Address" />
          </Col>
          <Col xs={4}>
            <Form.Control placeholder="Email" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={8}>
            <Form.Control as="textarea" rows={3} placeholder="Your comment" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={8}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
        </>
        

    );
}
export default ContectUs;