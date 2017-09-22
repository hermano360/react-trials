import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import setupBg from '../../images/setup-upper.png';

class ButtonSetupStepsPage extends Component{
  constructor(props) {
    super(props);
    console.log('Constructor');    
  }   
  render(){
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <div className='content _setup_screen' id="buttonSetupSteps">
        <h1 className='heading'>Button Setup</h1>
        <div className="inner_content stepsContainer no-padding">
        <Slider {...settings}>
          <div className="stepBlock">
            <div className="upperSection">
              <img src={setupBg} alt="setupbg" className="setupBg"/>
              
            </div>
            <div className="lowerSection">
              <p className="stepsCount"><span className="_active">01</span> / 04</p>
              <p className='tagline'>Press and hold the bttn. While holding the bttn pressed, add power (batteries or USB). Keep holding the bttn pressed and click next.</p>
              <Link to='' className="a-btn btn-green _nxt_button">Next</Link>
            </div>            
          </div> 
          <div className="stepBlock">
            <div className="upperSection">
              <img src={setupBg} alt="setupbg" className="setupBg"/>
              
            </div>
            <div className="lowerSection">
              <p className="stepsCount"><span className="_active">02</span> / 04</p>
              <p className='tagline'>Hold the bttn pressed until it shows a ring of blue LEDs. Blue LEDs indicate that the internal Wi-Fi access point is active. You can release the bttn now.</p>
              <Link to='' className="a-btn btn-green _nxt_button">Next</Link>
            </div>            
          </div> 
          <div className="stepBlock">
            <div className="upperSection">
              <img src={setupBg} alt="setupbg" className="setupBg"/>
              
            </div>
            <div className="lowerSection">
              <p className="stepsCount"><span className="_active">03</span> / 04</p>
              <p className='tagline'>Using your phone or laptop, search for available Wi-Fi networks. Join the network 'bttnconf' (no password needed) Wait until Wi-Fi connection is established and click next.</p>
              <Link to='' className="a-btn btn-green _nxt_button">Next</Link>
            </div>            
          </div> 
          <div className="stepBlock">
            <div className="upperSection">
              <img src={setupBg} alt="setupbg" className="setupBg"/>
              
            </div>
            <div className="lowerSection">
              <p className="stepsCount"><span className="_active">04</span> / 04</p>
              <p className='tagline'>You should see a page asking for your Wi-Fi network's name and password. Enter these and click Save. bttn will then restart itself and join your Wi-fi.</p>
              <Link to='' className="a-btn btn-green _nxt_button">Next</Link>
            </div>            
          </div> 
          </Slider>         
        </div>                  
      </div>
      )      
  }  
}
export default ButtonSetupStepsPage;