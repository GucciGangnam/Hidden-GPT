// IMPORTS 
// RRD 
import { Route, Routes } from 'react-router-dom'

// Hooks

// Styles 
import './App.css'

// Pages 
import { Homepage } from './pages/Homepage'

// Components


// COMPOENT //
export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  )
}