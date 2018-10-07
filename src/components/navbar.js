import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../images/logo.svg';
import FBLogo from '../images/logo_fb.png';
import TWLogo from '../images/logo_tw.png';

const menu = [
  'Home',
  'Rooms',
  'Restaurant',
  'Shop',
  'Contact'
];


class Navbar extends Component {
    render() {
     const Listmenu = menu.map(item => (
       <li>
         <Link to={"/" + item==="Home" ? null : item.toLowerCase()}>{item}</Link>
       </li>
       )
     );
      return (
        <div className="App">

          <div id="top-menu" className="navbar" style={{display: 'flex'}}>
            <div><img id="logo" alt="logo" src={Logo}/></div>
            <div>  <img className="socialmedia" src={FBLogo} alt="facebook" />  </div>
            <div>  <img className="socialmedia" src={TWLogo} alt="twitter" />  </div>
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
