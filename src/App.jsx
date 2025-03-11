import { useEffect, useState } from 'react'
import img from './assets/IMG_8464.jpg'
import './App.css'

const TARGET_DATE = new Date('2025-08-01T00:00:00')

function App() {
  const [weeksLeft, setWeeksLeft] = useState(null)

  useEffect(() => {
    const calculateWeeksLeft = () => {
      const now = new Date()
      const diffMs = TARGET_DATE - now
      const diffWeeks = diffMs / (1000 * 60 * 60 * 24 * 7)
      setWeeksLeft(Math.max(0, Math.floor(diffWeeks)))
    }

    calculateWeeksLeft()
    const interval = setInterval(calculateWeeksLeft, 1000 * 60 * 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app-container">
      <div className="content">
        <img src={img} className="my-house" alt="my-house" />
        <h1>Femte Villavägen 12</h1>
        <p className="subtitle">Tillträde: 1 augusti 2025</p>
        <div className="countdown-box">
          <h2>{weeksLeft} veckor kvar</h2>
          <p className="countdown-sub">⏳ tills du får nycklarna</p>
        </div>
      </div>
    </div>
  )
}

export default App
