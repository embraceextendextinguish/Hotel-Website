import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import HomePage from './components/homepage';
import Navbar from './components/navbar';
import TopCarousel from './components/carousel';

class Home extends Component {
  render() {
      return <HomePage />;
  }
}

const Rooms = () => {
  <div>
    <h2>Rooms</h2>
  </div>
}

const Restaurant = () => {
  <div>
    <h2>Restaurant</h2>
  </div>
}

const Shop = () => {
  <div>
    <h2>Shop</h2>
  </div>
}

const Contact = () => {
  <div>
    <h2>Contact</h2>
  </div>
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
             <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="/restaurant">Restaurant</Link>
                </li>
              </ul>
          <TopCarousel />
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
