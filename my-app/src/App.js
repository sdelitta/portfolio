import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
      </header>
      <div className="body">
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default App;
