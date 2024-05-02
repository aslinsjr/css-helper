import { useState } from 'react'

import BoxShadowGeneration from './components/BoxShadowGeneration'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxShadowGeneration />
    </>
  )
}

export default App
