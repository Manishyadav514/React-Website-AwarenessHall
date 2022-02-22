import './App.css';
import React from 'react';
import Home from './components/pages/Home'
import SignIn from './components/pages/SignIn'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/SignIn' element={<SignIn />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
