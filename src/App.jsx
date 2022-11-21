import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Calendar } from './views';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Calendar" element={<Calendar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
