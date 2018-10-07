import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import imgOne from '../images/img1.jpg';
import imgTwo from '../images/img2.jpg';
import imgThree from '../images/img3.jpg';


class HomePage extends Component {

  content = [
    {
      image: imgOne,
      text: '## block one\n'+
            '\n\n'+
            'some content here.\n'+
            '+ test\n'+
            '+ markdown\n',
    },
    {
      image: imgTwo,
      text: '## block two\n'+
            '\n\n'+
            'some content here as well.\n'+
            '\n\n'+
            '---\n'+
            'etc',
    },
    {
      image: imgThree,
      text: '## Block Three\n'+
            '\n'+
            'In block three, you will find exquisitely prepared treats for your viewing pleasure.',
    },
  ];



  render() {
    return(
      
      <div className="content">
        { this.content.map( block =>(
              <div className="contentBlock">
                <img className="blockImage" src={block.image} alt={block.text.split(" ")[0]} />
                <p>
                  <ReactMarkdown source={ block.text } />
                </p>
                <div className="symbol">
                  <div>&diams;</div>
                </div>
                <hr className="separator" />
              </div>
          ))
        }
      </div>
    ) 
  }

}

export default HomePage;
