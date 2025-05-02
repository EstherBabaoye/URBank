import { useState } from 'react'
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import Home from './Pages/Home'
import Header2 from './Components/Header2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Header2/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
