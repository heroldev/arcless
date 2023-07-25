import { Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Projects from "./views/Projects/Projects"

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="projects" element={<Projects />}/>
      </Routes>
    </>
  )
}

export default App
