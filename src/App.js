import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/routes';

import './App.css';
import Lectures from './pages/lectures';
import Upload from './pages/upload';
import Dates from './pages/dates';
import Attendance from './pages/attendance';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={< Lectures/>} />
                  <Route exact path="/dates" element={<Dates/>} />
                  <Route exact path="/attendance" element={<Attendance/>} />
                  <Route exact path="/upload" element={<Upload/>} />
                  
                  

              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;