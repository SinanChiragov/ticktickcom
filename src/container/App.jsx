import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Download from '../pages/Download';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Help from '../pages/Help'
import Security from '../pages/Security';
import Lisence from '../pages/Lisence';
import Privacy from '../pages/Privacy';
import Pro from '../pages/Premium';
import Cards from '../pages/Cards';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="features" element={<About />} />
          <Route path="download" element={<Download />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="helpcenter" element={<Help />} />
          <Route path="security" element={<Security />} />
          <Route path="license/web" element={<Lisence />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path='/card' element={<Cards />} />
          <Route path='/upgrade' element={<Pro />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
