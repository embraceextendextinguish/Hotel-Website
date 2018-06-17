import React, { Component } from 'react';
import '../App.css';

import Logo from '../images/logo.svg';

const menu = [
  'Hotel Rezydent',
  'Rooms',
  'Restaurant',
  'Shop',
  'Contact' ]


class Navbar extends Component {
  ulStyle = {
    gridTemplateColumns: Array(2).fill('auto').join(" "),
}
    render() {
     const Listmenu = menu.map(item => <li> {item} </li>)
      return (
        <div className="App">
          <div id="top-menu" className="navbar">
            <ul className="inline-List" id="Navlinks" style={ this.ulStyle }>
                <li> <img id="logo" alt="logo" src={Logo}/>  </li>
                <li>  facebook  </li>
                <li>  twitter  </li>
              </ul>
              <h1>Pokoje-Bryza </h1>
            </div>
            <div id="submenu"> 
                <ul>
                    {Listmenu}
                </ul>  
            </div>
        </div>
      );
    }
  }
  
  export default Navbar;