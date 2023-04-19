import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './font/themify-icons/themify-icons.css';
import './golobalStyle/base.css';
import Header from './components/Header';
import MyClass from './components/pages/MyClass';
import Members from './components/pages/Members';
import Album from './components/pages/Album';
import LastDay from './components/pages/LastDay';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="memory-high-school-front-end/" exact element={<MyClass />} />
          <Route path="memory-high-school-front-end/MyClass" exact element={<MyClass />} />
          <Route path="memory-high-school-front-end/Members" element={<Members />} />
          <Route path="memory-high-school-front-end/Album" element={<Album />} />
          <Route path="memory-high-school-front-end/LastDay" element={<LastDay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
