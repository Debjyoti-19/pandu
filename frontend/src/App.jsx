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
        <Route path="/" element={<Page1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
