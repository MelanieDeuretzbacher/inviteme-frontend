import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Calendar, Layout } from './views';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="calendar" element={<Calendar />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
