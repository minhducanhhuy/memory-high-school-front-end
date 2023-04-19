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
          <Route path="/" exact element={<MyClass />} />
          <Route path="/MyClass" exact element={<MyClass />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/LastDay" element={<LastDay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
