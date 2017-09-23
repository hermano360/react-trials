import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ButtonRegistrationPage extends Component{
  constructor(props) {
    super(props);
    super(props);
    this.state = (
      {
        buttonId: '', 
        error: '',
        redirect: false,
        success: ''
      }
    );
    this.handleValChange = this.handleValChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleValChange(e){
    this.setState({buttonId: e.target.value});

  }
  render(){
    if(this.state.redirect){
      return( 
        <Redirect to='/setup-steps'/>
      )
    }else{
      return(
        <div className='content _v_screens' id="smsVerificationPage">
          <h1 className='heading'>Button Registration</h1>
          <p className='tagline'>Enter your button ID below. This is the 13 digit number which you will find on the back of your device.</p>
          <form onSubmit={this.handleSubmit}>
            <input type="number" name="buttonId" placeholder="Enter your button ID" value={this.state.buttonId} onChange={this.handleValChange} />
            <span className="field__error">{this.state.error}</span>
            <button type="submit" className="a-btn btn-green" onClick={this.handleSubmit}>Submit</button>          
          </form>
          {this.state.success}
        </div>
      )  
    }  
  }
  handleSubmit(e){
    e.preventDefault();  
    var _this = this;   
    var authToken = 'Token ' + localStorage.getItem('userAuthToken'); 
    if(_this.state.buttonId === ''){
      _this.setState({error: '*Required'});
    }else{
      document.getElementById("_loader").className = '_show';
      var obj = {"device_tag" : ""};    
      obj['device_tag'] = _this.state.buttonId;  
      var data = JSON.stringify(obj);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
         var response = JSON.parse(this.responseText); 
          if(response.status === 'Success'){
            _this.setState({error: '', success: <span className="_form_success">Code Verified</span>});
            setTimeout(function(){
              document.getElementById("_loader").className = '';
              _this.setState({redirect: true});
            }, 1000);
          }else{
            document.getElementById("_loader").className = '';
            if('code' in response){
              _this.setState({error: response.code});
            }else if('detail' in response){
              _this.setState({error: response.detail});
            }            
          }
        }
      });

      xhr.open("PUT", "https://budsy-staging.mybluemix.net/api/v0/auth/iot/register/");
      xhr.setRequestHeader("authorization", authToken);
      xhr.setRequestHeader("content-type", "application/json");

      xhr.send(data);
    }
  }
}
export default ButtonRegistrationPage;