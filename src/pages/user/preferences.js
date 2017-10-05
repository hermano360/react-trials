import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';
// import Hamburger from '../user/hamburger';
import  'react-input-range/lib/css/index.css';

class MyPreferencesPage extends Component{
  constructor(props) {
    super(props);
    // console.log(props);  
    this.state = {
      value: { min: 40, max: 60 },
    };  
  }   
  render(){    
    return(
      <div className='content _user_screen' id="myPreferences">        
        <h1 className='heading'>My Preferences</h1>
        <div className="inner_content">  
          <form>
            <div className="_options_box">
              <h2>Strains</h2>
              <p>Select your preference of strain</p> 
            </div> 
            <div className="_options_box _buzzwords">
              <h2>Buzzwords</h2>
              <p>Select 3 words that suit your high</p>
              <ul className="clearfix">
                <li>
                  <input type="checkbox" value="No" name="btn-receive" id="receive-no" />
                  <label htmlFor="receive-no">Buzzword</label>
                </li>
              </ul>
            </div> 
            <div className="_options_box _price_range">
              <h2>Price Range</h2>
              <p>What price are you looking to spend on an 1/8th of an oz?</p>     
              <InputRange
                maxValue={90}
                minValue={15}
                value={this.state.value}
                formatLabel={value => `$${value}`}
                onChange={value => this.setState({ value })} />         
            </div>
            <a className="a-btn btn-green _nxt_button" href="">Next</a>
          </form>              
        </div>                        
      </div>
    )      
  }  
}
export default MyPreferencesPage;