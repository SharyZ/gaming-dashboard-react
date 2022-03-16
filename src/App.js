import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {
  TheLeftSidebar, TheRightSidebar
} from "./components"

import { Main, Games, GameDetail } from "./pages"

function App() {
  return (
    <>
      <Router>
        <TheLeftSidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:gameId" element={<GameDetail />} />
        </Routes>
        <TheRightSidebar />
      </Router>
    </>
  )
}

export default App
