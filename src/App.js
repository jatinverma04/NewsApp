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
          <Route path="/" element={<Newsbox category="general" mode={mode} setProgress={setProgress} />} />
          <Route path="/sports" element={<Newsbox category="sports" mode={mode} setProgress={setProgress} />} />
          <Route path="/business" element={<Newsbox category="business" mode={mode} setProgress={setProgress} />} />
          <Route path="/technology" element={<Newsbox category="technology" mode={mode} setProgress={setProgress} />} />
          <Route path="/health" element={<Newsbox category="health" mode={mode} setProgress={setProgress} />} />
          <Route path="/science" element={<Newsbox category="science" mode={mode} setProgress={setProgress} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
