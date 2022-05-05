import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

      </header>
      <body>




      </body>
    </div>
  );
}

export default App;
