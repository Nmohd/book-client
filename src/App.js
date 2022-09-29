import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Topheader from "./components/Topheader"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Topheader />
      <Header />
      <Navbar />
      <Main />
    </>
  )
}

export default App
