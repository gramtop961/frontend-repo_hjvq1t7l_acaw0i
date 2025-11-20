import React from 'react'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Scenes from './components/Scenes'
import Demo from './components/Demo'
import FinalCall from './components/FinalCall'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Journey />
      <Scenes />
      <Demo />
      <FinalCall />
    </div>
  )
}

export default App
