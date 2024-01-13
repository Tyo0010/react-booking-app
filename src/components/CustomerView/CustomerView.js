import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CustomerView = () => {
  const [date, setDate] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${date} with employee ID ${employeeId}`);
    // Here we will later integrate the API call to backend
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formEmployee">
              <Form.Label>Employee</Form.Label>
              <Form.Control as="select" value={employeeId} onChange={e => setEmployeeId(e.target.value)} required>
                <option value="">Select Employee</option>
                {/* Employee options will be fetched from backend */}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Book Appointment</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerView;
