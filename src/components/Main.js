import "./Main.css";
import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Main;
