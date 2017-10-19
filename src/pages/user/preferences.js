import React, { Component } from 'react';
import InputRange from 'react-input-range';
import Knob from 'react-canvas-knob';
import  'react-input-range/lib/css/index.css';
import Hamburger from '../user/hamburger';


var authToken = 'Token ' + localStorage.getItem('userAuthToken'),
    createdAlready = false; 

class MyPreferencesPage extends Component{
  constructor(props) {
    super(props);
    // console.log(props);  
    this.state = {  
      knobValSatvia: 50, 
      knobValHybrid: 30, 
      knobValIndica: 20,     
      knobSettings:{        
        knobWidth: 75,
        knobHeight: 75,
        knobThickness: 0.08,
        knobBgColor: "#555b71",
        knobFgColor: "#69ca69"
      },
      value: { min: 40, max: 60 },      
      buzzwords: [
        {
          "words": [
              "Buzzword",
              "Buzzword 2"              
          ],
          "category": "Category Name"
        }
      ],
      buzzwordStatus: 'buzzwordsLoading'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSatvia = this.handleChangeSatvia.bind(this);
    this.handleChangeHybrid = this.handleChangeHybrid.bind(this);
    this.handleChangeIndica = this.handleChangeIndica.bind(this);    
  }
  componentWillMount(){
    var _this = this;
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var buzz = JSON.parse(this.responseText).data;
        for(var i = 0; i < buzz.length; i++) {
          var obj = buzz[i];
          if(obj.category === 'negatives'){
            buzz.splice(i,1);
          }            
        }
        _this.setState({buzzwords: buzz, buzzwordStatus: 'buzzwordsLoaded'});
      }
    });

    xhr.open("GET", "https://budsy-staging.mybluemix.net/api/v0/customer/utils/buzzword/");
    xhr.setRequestHeader("authorization", authToken);
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);   
    
  }  
  handleChangeSatvia = (newValue) => {
    this.setState({knobValSatvia: newValue});
  }
  handleChangeHybrid = (newValue) => {
    this.setState({knobValHybrid: newValue});
  }
  handleChangeIndica = (newValue) => {
    this.setState({knobValIndica: newValue});
  }   
  render(){   
    var buzzwords = this.state.buzzwords;   
    
    return(
      <div className='content _user_screen' id="myPreferences">   
        <div className="_hamburger" onClick={Hamburger}><span className="_top_line"></span><span className="_middle_line"></span><span className="_bottom_line"></span></div>
        <h1 className='heading'>My Preferences</h1>
        <div className="inner_content">  
          <form>
            <div className="_options_box">
              <h2>Strains</h2>
              <p>Select your preference of strain</p> 
              <div className="_strains_block clearfix">
                <div className="satvia">
                  <Knob
                    value={this.state.knobValSatvia}
                    width={this.state.knobSettings.knobWidth}
                    height={this.state.knobSettings.knobHeight}
                    fgColor={this.state.knobSettings.knobFgColor}
                    bgColor={this.state.knobSettings.knobBgColor} 
                    thickness={this.state.knobSettings.knobThickness}
                    onChange={this.handleChangeSatvia}
                  />
                  <h5>Satvia</h5>
                </div>
                <div className="hybrid">
                  <Knob
                    value={this.state.knobValHybrid}
                    width={this.state.knobSettings.knobWidth}
                    height={this.state.knobSettings.knobHeight}
                    fgColor={this.state.knobSettings.knobFgColor}
                    bgColor={this.state.knobSettings.knobBgColor} 
                    thickness={this.state.knobSettings.knobThickness}
                    onChange={this.handleChangeHybrid}
                  />
                  <h5>Hybrid</h5>
                </div>
                <div className="indica">
                  <Knob
                    value={this.state.knobValIndica}
                    width={this.state.knobSettings.knobWidth}
                    height={this.state.knobSettings.knobHeight}
                    fgColor={this.state.knobSettings.knobFgColor}
                    bgColor={this.state.knobSettings.knobBgColor} 
                    thickness={this.state.knobSettings.knobThickness}
                    onChange={this.handleChangeIndica}
                  />
                  <h5>Indica</h5>
                </div>
              </div>
            </div> 
            <div className="_options_box _buzzwords" id={this.state.buzzwordStatus}>
              <h2>Buzzwords</h2>
              <p>Select 3 words that suit your high</p>
              {buzzwords.map(function(name, i){
                var blockClass = "_bw_block _" + name.category + "_block";
                return <div key={name.category} className={blockClass}>
                  <h3>{name.category}</h3>
                  <ul className="clearfix">                     
                    {name.words.map(function(word, j){          
                        if(j <= 1){
                          return <li key={word}>
                              <input type="checkbox" value={word} name="buzzwords" id={word} data-buzz-category={name.category} />
                              <label htmlFor={word}>{word}</label>
                            </li> 
                        }
                    })}
                  </ul>
                  </div>                
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
    var _this = this,
        selectedBuzzwords= [],
        obj1 = {},
        buzzwordsCheckbox = document.getElementsByName('buzzwords'),
        method = "POST",
        sendTo = "https://budsy-staging.mybluemix.net/api/v0/customer/preferences/create/";
    if(createdAlready){
      method = "PUT",
      sendTo = "https://budsy-staging.mybluemix.net/api/v0/customer/preferences/update/"
    }

    for (var i=0; i<buzzwordsCheckbox.length; i++) {
       if (buzzwordsCheckbox[i].checked) {
          obj1['name' + i] = buzzwordsCheckbox[i].getAttribute("value");         
       }
    }
    selectedBuzzwords.push(obj1);
    var obj = {
      "strain": {
        "Sativa" : _this.state.knobValSatvia/100,
        "Indica" : _this.state.knobValIndica/100,
        "Hybrid" : _this.state.knobValHybrid/100
      },
      "price_point": _this.state.value,
      "buzzwords" :  selectedBuzzwords             
    }

    var data = JSON.stringify(obj);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);        
      }
    });

    xhr.open(method, sendTo);
    xhr.setRequestHeader("authorization", authToken);
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);

  } 
}
export default MyPreferencesPage;