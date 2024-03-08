import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from"./components/Navbar"
import { useState } from 'react'

export default function App() {
  const  [favorites, setFavorites] = useState([])

  return (
    <>
    <Navbar/>
    <Outlet context={{favorites, setFavorites}} />
    </>
    )
}
