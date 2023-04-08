import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Index } from "./pages/Index"
import { MainScreen } from "./pages/main-screen"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { DarkTheme, LightTheme } from "./styles/theme/themes"
 
function App() {
  // const theme = useSelector((state: RootState) => state.sliceTheme)
  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/posts" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App