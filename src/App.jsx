import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path='/project' element={<Project/>} />
        </Routes>
    );
}

export default App;
