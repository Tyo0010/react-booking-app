import React from 'react';
import { Container, Table } from 'react-bootstrap';

const EmployeeView = () => {
  // The appointments data will be fetched from backend
  const appointments = []; // This will be replaced with actual data

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Employee ID</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{appointment.date}</td>
              <td>{appointment.employee_id}</td>
              <td>{appointment.customer_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default EmployeeView;
