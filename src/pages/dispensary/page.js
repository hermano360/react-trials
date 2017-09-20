import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class DispensaryPage extends Component{
  constructor(props) {
    super(props);
    this.state = ({code: '', error: ''});
    this.handleValChange = this.handleValChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleValChange(e){
    this.setState({code: e.target.value});

  }
  render(){
    return(
      <div className='content _v_screens' id="smsVerificationPage">
        <h1 className='heading'>Beta Registration</h1>
        <p className='tagline'>Please enter the 6 digit code given to you by your dispensary</p>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="code" placeholder="6 digit code inputs here" value={this.state.code} onChange={this.handleValChange} />
          <span className="field__error">{this.state.error}</span>
          <button type="submit" className="a-btn btn-green" onClick={this.handleSubmit}>Submit</button>          
        </form>
      </div>
    )    
  }
  handleSubmit(e, values){
    e.preventDefault();
    var obj = {"code" : ""};    
    obj['code'] = this.state.code;
   //  var data = JSON.stringify(obj);
   //  fetch('https://budsy-staging.mybluemix.net/api/v0/auth/verify/new', { 
   //   method: 'put', 
   //   headers: {
   //     'Authorization': 'Token 1901f18975806d824d42f98b01dec42c2ef6217c', 
   //     'Content-type': 'application/json'
   //   }, 
   //   body: data
   // });
   var yo = this.state.error;
   var data = JSON.stringify(obj);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      // console.log(this)
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
export default DispensaryPage;