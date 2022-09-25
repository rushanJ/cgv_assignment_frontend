import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/routes';

import './App.css';
import Lectures from './pages/lectures';
import CheckOrder from './pages/check-order';
import DispatchOrders from './pages/dispatch-orders';
import ReceiveConfirmation from './pages/receive-confirmation';
import Dates from './pages/dates';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={< Lectures/>} />
                  <Route exact path="/check-order" element={<CheckOrder/>} />
                  <Route exact path="/dispatch-orders" element={< DispatchOrders/>} />
                  <Route exact path="/receive-confirmation" element={<ReceiveConfirmation/>} />
                  <Route exact path="/dates" element={<Dates/>} />

              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;