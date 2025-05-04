import { useState } from 'react'
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import Home from './Pages/Home'
import Header2 from './Components/Header2'
import MobileHeader from './Components/MobileHeader' // ✅ You imported this

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header />
        <Header2 />
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader /> {/* ✅ Use the correct component */}
      </div>

      <Home />
      <Footer />
    </>
  )
}

export default App
