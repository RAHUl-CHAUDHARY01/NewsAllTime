import './App.css';
import ReactDOM from "react-dom/client";
import React, { useCallback , Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particle from './Particle';

export default class App extends Component {
    pageSize = 12;
    render() {
        return ( 
          <div className="background" >
          <Particle />

            <Router>
            <Navbar title="NewsAllTime"/>
            
              <Routes>
                <Route path='/' element={<News key='general'  pageSize={this.pageSize} country="in" category='general' />}></Route>
                <Route path='/general' element={<News key='general'  pageSize={this.pageSize} country="in" category='general' />}></Route>
                <Route path='/business' element={<News key='business'  pageSize={this.pageSize} country="in" category='business' />}></Route>
                <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize}  country="in" category='entertainment' />}></Route>
                <Route path='/health' element={<News key='health'  pageSize={this.pageSize} country="in" category='health' />}></Route>
                <Route path='/science' element={<News key='science' pageSize={this.pageSize}  country="in" category='science' />}></Route>
                <Route path='/sports' element={<News key='sports' pageSize={this.pageSize}  country="in" category='sports' />}></Route>
                <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} country="in" category='technology' />}></Route>
              </Routes>
            </Router>   
          </div>
        )
  }
}
