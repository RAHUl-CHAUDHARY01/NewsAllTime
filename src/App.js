import './App.css';
import ReactDOM from "react-dom/client";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';

export default class App extends Component {
  
  render() {

    return (
      <div>
         <Router>

          {/* <Particle/> */}
         <Navbar title="NewsAllTime"/>
            <Carousel/>
            {/* <marquee width="60%" direction="left" height="100px">
                This is a sample scrolling text that has scrolls texts to the left.
            </marquee> */}
          {/* <Routes>
            <Route path='/' element={<News key='general' pageSize={12} country="in" category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={12} country="in" category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={12} country="in" category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={12} country="in" category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={12} country="in" category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={12} country="in" category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={5} country="in" category='technology' />}></Route>
          </Routes> */}
        </Router>
        
       
      </div>
    )
  }
}
