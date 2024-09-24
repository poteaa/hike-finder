import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'

import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'

import "./server"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="explore" element={<Explore />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
