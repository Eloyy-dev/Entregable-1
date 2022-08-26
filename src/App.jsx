import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './componentes/QuoteBox'
import text from './text.json'




function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <QuoteBox/>
    </>
  )
}

export default App
