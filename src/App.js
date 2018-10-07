import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './components/navbar';
import TopCarousel from './components/carousel';
import HomePage from './components/homepage';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <TopCarousel />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

const Home = () => (
  <div className="content">
    <h2>Home</h2>
  </div>
);

const Rooms = () => (
  <div className="content">
    <h2>Rooms</h2>
  </div>
);

const Restaurant = () => (
  <div className="content">
    <h2>Restaurant</h2>
  </div>
);

const Shop = () => (
  <div className="content">
    <h2>Shop</h2>
  </div>
);

const Contact = () => (
  <div className="content">
    <h2>Contact</h2>
  </div>
);

export default App;
