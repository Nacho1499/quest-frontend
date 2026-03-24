import { Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar"

import Home from "./pages/Home"
import Store from "./pages/Store"
import GameMode from "./pages/GameMode"
import Settings from "./pages/Settings"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App