import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "./components/page1";
import Signup from "./components/signup";
import Login from "./components/login";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
