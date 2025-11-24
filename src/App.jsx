import { useState } from 'react'

import './App.css'
//import LandingPage from './Components/Landingpage'
import Bro from "./Components/Bro"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LandingPage/> */}
      <Bro/>
    </>
  )
}

export default App
