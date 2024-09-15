import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DartPage from './pages/DartPage'
import FlutterPage from './pages/FlutterPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dart" element={<DartPage />} />
        <Route path="/flutter" element={<FlutterPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App