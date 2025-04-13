import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newsbox from './components/Newsbox';

function App() {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar mode={mode} setMode={setMode} />
      <div className={`bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
        <Routes>
          <Route path="/" element={<Newsbox catagory="general" mode={mode} setProgress={setProgress} />} />
          <Route path="/sports" element={<Newsbox catagory="sports" mode={mode} setProgress={setProgress} />} />
          <Route path="/business" element={<Newsbox catagory="business" mode={mode} setProgress={setProgress} />} />
          <Route path="/technology" element={<Newsbox catagory="technology" mode={mode} setProgress={setProgress} />} />
          <Route path="/health" element={<Newsbox catagory="health" mode={mode} setProgress={setProgress} />} />
          <Route path="/science" element={<Newsbox catagory="science" mode={mode} setProgress={setProgress} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
