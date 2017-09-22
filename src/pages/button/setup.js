import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonSetupPage extends Component{
  constructor(props) {
    super(props);
    this.state = ({receive: 'No', btnType: 'Wifi'});
    this.btnReceiveStatus = this.btnReceiveStatus.bind(this);
    this.btnTypeChange = this.btnTypeChange.bind(this);
  }  
  btnReceiveStatus(e){
    this.setState({receive: e.target.firstChild.nodeValue});
  } 
  btnTypeChange(e){
    this.setState({btnType: e.target.firstChild.nodeValue});
  }
  render(){
    var receiveStatus = '';
    var redirectTo = '/order';
    if(this.state.receive === 'No'){
      receiveStatus = 'disabled';    
    }else{
      receiveStatus = 'enabled';  
      if(this.state.btnType === 'Wifi'){
        redirectTo = '/button-registration';        
      }else{
        redirectTo = '/order';  
      }
    }
       
    return(
      <div className='content _setup_screen' id="buttonSetup">
        <h1 className='heading'>Button Setup</h1>
        <div className="inner_content">
          <p className='tagline'>Before we get started we have a few questions we need you to answer</p>   
          <div className="_options_box">
            <h2>Did you receive your button?</h2>
            <ul className="clearfix">
              <li><input type="radio" value="No" name="btn-receive" id="receive-no"/><label htmlFor="receive-no" onClick={this.btnReceiveStatus}>No</label></li>
              <li><input type="radio" value="Yes" name="btn-receive" id="receive-yes" /><label htmlFor="receive-yes" onClick={this.btnReceiveStatus}>Yes</label></li>
            </ul>
          </div>
          <div className="_options_box">
            <h2>What kind of button is it?</h2>
            <ul className="clearfix">
              <li className={receiveStatus}><input type="radio" value="Wifi" name="btn-kind" id="type-wifi" /><label htmlFor="type-wifi" onClick={this.btnTypeChange}>Wifi</label></li>
              <li className={receiveStatus}><input type="radio" value="GSM" name="btn-kind" id="type-gsm"  className="disabled"/><label htmlFor="type-gsm" onClick={this.btnTypeChange}>GSM</label></li>
            </ul>
          </div>
          <Link to={redirectTo} className="a-btn btn-green _nxt_button">Next</Link>
        </div>             
      </div>
      )
      
  }
  handleSubmit(e, values){    

  }
}
export default ButtonSetupPage;