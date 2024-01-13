import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerView from './components/CustomerView';
import EmployeeView from './components/EmployeeView';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CustomerView />} />
        <Route path="/employee" element={<EmployeeView />} />
      </Routes>
    </Router>
  );
}

export default App;
