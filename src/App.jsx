import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
