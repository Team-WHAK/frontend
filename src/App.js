import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import Index from "./pages/IndexPage"
import LogIn from "./pages/LogIn"
import New from "./pages/New"
import NotFound from "./pages/NotFound"
import ProtectedIndex from "./pages/ProtectedIndex"
import Show from "./pages/Show"
import SignUp from "./pages/SignUp"
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Edit />
      <Home />
      <Index />
      <LogIn />
      <New />
      <NotFound />
      <ProtectedIndex />
      <Show />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
