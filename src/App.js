import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import HeartDiseaseForm from './HeartDiseaseForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prediction" element={<HeartDiseaseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
