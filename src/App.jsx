import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayout from './components/layout/AppLayout/AppLayout'
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'

import "./server"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
