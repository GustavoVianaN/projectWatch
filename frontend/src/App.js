import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Movies from './components/moviesList/Movies';
import MoviesInclude from './components/moviesInclude/MoviesInclude';
import Users from './components/users/users';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <Router>
      <div className="App">
        <header className="container">
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <Navbar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/incluirfilme" element={<MoviesInclude />} />
            <Route path="/usuarios" element={<Users />} />
          </Routes>
        </header>
      </div>
    </Router>


  );

};



export default App;
