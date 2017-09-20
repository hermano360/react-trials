import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class ButtonRegistrationPage extends Component{
  constructor(props) {
    super(props);
    this.state = ({buttonId: '', error: ''});
    this.handleValChange = this.handleValChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleValChange(e){
    this.setState({buttonId: e.target.value});

  }
  render(){
    return(
      <div className='content _v_screens' id="smsVerificationPage">
        <h1 className='heading'>Button Registration</h1>
        <p className='tagline'>Enter your button ID below. This is the 13 digit number which you will find on the back of your device.</p>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="code" placeholder="Enter your button ID" value={this.state.buttonId} onChange={this.handleValChange} />
          <span className="field__error">{this.state.error}</span>
          <button type="submit" className="a-btn btn-green" onClick={this.handleSubmit}>Submit</button>          
        </form>
      </div>
    )    
  }
  handleSubmit(e, values){
    e.preventDefault();
    var obj = {"buttonId" : ""};    
    obj['buttonId'] = this.state.buttonId;
   
   var yo = this.state.error;
   var data = JSON.stringify(obj);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
       yo = this.responseText;
    console.log(yo);
        // if(this.status){}
      }
    });

    xhr.open("PUT", "https://budsy-staging.mybluemix.net/api/v0/auth/verify/new");
    xhr.setRequestHeader("authorization", "Token 1901f18975806d824d42f98b01dec42c2ef6217c");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);

  }
}
export default ButtonRegistrationPage;