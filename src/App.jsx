import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'

import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/login"

import "./server"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="explore" element={<Explore />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
