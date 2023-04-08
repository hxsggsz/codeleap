import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Index } from "./pages/Index"
import { MainScreen } from "./pages/main-screen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/posts" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App