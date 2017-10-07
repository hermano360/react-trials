import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';
// import Hamburger from '../user/hamburger';
import  'react-input-range/lib/css/index.css';
import Hamburger from '../user/hamburger';

class MyPreferencesPage extends Component{
  constructor(props) {
    super(props);
    // console.log(props);  
    this.state = {
      value: { min: 40, max: 60 },      
      buzzwords: [
        {
          "Category 1": [
            "Buzzowrd 1",
            "Buzzowrd 2"            
          ],
          "Category 2": [
            "Buzzowrd 3",
            "Buzzowrd 4"
          ]
        }
      ],
      buzzwordStatus: 'buzzwordsLoading'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    // alert('yes');
    // console.log(this.state.shiv)
    var _this = this;
    setTimeout(function(){
      _this.setState({
        buzzwords: [
          {
            "effects": [
              "uplifted",
              "relaxed",
              "happy",
              "euphoric",
              "giggly",
              "creative",
              "aroused",
              "hungry",
              "long lasting",
              "mellow",
              "motivation",
              "sociable",
              "calming",
              "heavy",
              "focus",
              "energy",
              "cerebral"
            ],
            "negatives": [
              "dry mouth",
              "dizzy",
              "paranoid",
              "dry eyes",
              "anxious"
            ],
            "flavor": [
              "chemical",
              "nutty",
              "spicy",
              "sweet",
              "wood",
              "dairy",
              "citrus",
              "tropical",
              "floral",
              "berries",
              "herb",
              "leafy",
              "earthy"
            ]
          }
        ],
        buzzwordStatus: 'buzzwordsLoaded'
      });      
    }, 2000)
    
    
  }
  componentDidMount(){
    // console.log(this.state.shiv)
  }   
  render(){   
    var buzzwordsCat = this.state.buzzwords[0];
    var buzzwordsTitle = Object.keys(buzzwordsCat);  
    return(
      <div className='content _user_screen' id="myPreferences">   
        <div className="_hamburger" onClick={Hamburger}><span className="_top_line"></span><span className="_middle_line"></span><span className="_bottom_line"></span></div>
        <h1 className='heading'>My Preferences</h1>
        <div className="inner_content">  
          <form>
            <div className="_options_box">
              <h2>Strains</h2>
              <p>Select your preference of strain</p> 
            </div> 
            <div className="_options_box _buzzwords" id={this.state.buzzwordStatus}>
              <h2>Buzzwords</h2>
              <p>Select 3 words that suit your high</p>
              {buzzwordsTitle.map(function(name, i){
                  if(name !== 'negatives'){
                    var blockClass = "_bw_block _" + name + "_block";
                    return <div key={name} className={blockClass}>
                      <h3>{name}</h3>
                      <ul className="clearfix">                      
                        {buzzwordsCat[name].map(function(val, i){          
                            if(i <= 1){
                              return <li key={val}>
                                  <input type="checkbox" value={val} name="buzzwords" id={val} />
                                  <label htmlFor={val}>{val}</label>
                                </li> 
                            }
                        })}
                      </ul>
                      </div>
                  }                  
              })}              
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
            <a className="a-btn btn-green" onClick={this.handleSubmit}>Save Preferences</a>
          </form>              
        </div>                        
      </div>
    )      
  } 
  handleSubmit(){
    // alert('yes');
    console.log(this.state.value)
  } 
}
export default MyPreferencesPage;