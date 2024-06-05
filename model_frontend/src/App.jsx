import React from "react"
import { Route, Routes } from 'react-router-dom'
import HomePage from "./HomePage.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Model from "./Model.jsx"
import Contact from "./Contact.jsx"
import './Responsive.css'
export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/model" element={<Model />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}