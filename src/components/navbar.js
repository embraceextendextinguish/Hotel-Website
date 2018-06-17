import React, { Component } from 'react';

import Logo from '../images/logo.svg';

const menu = [
  'Hotel Rezydent',
  'Rooms',
  'Restaurant',
  'Shop',
  'Contact' ]


class Navbar extends Component {
    render() {
     const Listmenu = menu.map(item => <li> {item} </li>)
      return (
        <div className="App">

          <div id="top-menu" className="navbar" style={{display: 'flex'}}>
            <div><img id="logo" alt="logo" src={Logo}/></div>
            <div>  facebook  </div>
            <div>  twitter  </div>
            <div className="title">  pokoje bryza  </div>
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
