import React from 'react';
import { HashRouter as Hashrouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './storage/principal/Home';
import './App.css';

function App() {
  return (
    <Hashrouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />








          
        </Routes>
      </div>
    </Hashrouter>
  );
}

export default App;

        
