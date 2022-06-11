import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section2 from './components/Section2'
import "./css/App.css"
import UsarContexto from './context/UsarContexto'
export default function App() {
    const [show, setShow]= useState(false)

  return (
    <div id='App'>
    <UsarContexto>
    <Header />
    <Section2 show={show} setshow={setShow}/>
    <Footer show={show} setshow={setShow}  />
    </UsarContexto>
    </div>
  )
}
