import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import "./Card.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Card/>
    </div>
  )
}

export default App
