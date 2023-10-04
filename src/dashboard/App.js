import React from 'react';
import Navbar from './page/compo/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Reports from './page/Reports';
import Products from './page/Products';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/products' element={<Products />} />
        </Routes>
    </>
  );
}

export default App;

