import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'
import bg from './assets/Img/bg.png'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen bg-slate-950/55">
        <BrowserRouter>
          <Navbar />
          <main>
            <Router />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App