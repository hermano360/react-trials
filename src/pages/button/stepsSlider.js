import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import setupBg from '../../images/setup-upper.png';



const StepsSlider = props => {		
	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
	return(
		<Slider className="inner_content stepsContainer no-padding" {...settings}>
          <div className="stepBlock">
            <div className="upperSection">
              <img src={setupBg} alt="setupbg" className="setupBg"/>
              <img className="upperIcon" src="" alt="one"/>
            </div>
            <div className="lowerSection">
              <p className="stepsCount"><span className="_active">01</span> / 04</p>
              <p className='tagline'>Press and hold the bttn. While holding the bttn pressed, add power (batteries or USB). Keep holding the bttn pressed and click next.</p>
              <Link to='' className="a-btn btn-green _nxt_button">Next</Link>
            </div>            
          </div>          
        </Slider> 
	)	
}

export default StepsSlider;