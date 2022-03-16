import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  TheLeftSidebar, TheMain, TheRightSidebar
} from "./components";

import { GameDetail, Games } from "./pages";

function App() {
  return (
    <>
      <Router>
        <TheLeftSidebar />
        <Routes>
          <Route path="/" element={<TheMain />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:gameId" element={<GameDetail />} />
        </Routes>
        <TheRightSidebar />
      </Router>
    </>
  );
}

export default App;
