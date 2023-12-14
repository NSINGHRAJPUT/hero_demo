import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const PriceCheckForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { origin, destination, weight });
  };

  return (
    <Form onSubmit={handleSubmit} className="w-80 container m-auto">
      <Row className="mb-3">
        <Col md>
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </Col>

        <Col md>
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </Col>

        <Col md>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Col>

        <Col xs={12} md className='pt-3'>
          <button type="submit" className="mt-3 p-2 demo_btn ">
            Check Price
          </button>
        </Col>
      </Row>
    </Form>
  );
};

export default PriceCheckForm;
