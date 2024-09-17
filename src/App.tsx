import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Kanbas from './Kanbas';
import Lab1 from './Labs/Lab1';
import Lab2 from './Labs/Lab2';
import Lab3 from './Labs/Lab3';
import Lab4 from './Labs/Lab4';
import Landing from './Landing';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kanbas/*" element={<Kanbas />} />
        <Route path="/labs/lab1/*" element={<Lab1 />} />
        <Route path="/labs/lab2/*" element={<Lab2 />} />
        <Route path="/labs/lab3/*" element={<Lab3 />} />
        <Route path="/labs/lab4/*" element={<Lab4 />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
