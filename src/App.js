import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>        
           <Route path='/'  element={<Home/> }exact />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
 
      </Router>
    </>
  );
}

export default App;
