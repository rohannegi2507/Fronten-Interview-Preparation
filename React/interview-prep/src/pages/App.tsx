import React, { useState } from 'react'

import Stopwatch from './Stopwatch'
import Home  from './Home'

import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="stopwatch" element={ <Stopwatch/> } />
      </Routes>
    </div>
  )
}

export default App
