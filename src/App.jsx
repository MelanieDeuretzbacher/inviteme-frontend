import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Calendar, Layout, Pending, AddEvent } from './views';
import "./css/global/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="calendar" element={<Calendar />}/>
          <Route path="pending" element={<Pending />}/>
          <Route path="add" element={<AddEvent />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
