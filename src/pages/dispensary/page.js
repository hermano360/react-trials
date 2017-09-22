import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class DispensaryPage extends Component{
  constructor(props) {
    super(props);
    this.state = (
      {
        code: '', 
        error: '',
        redirect: false,
        success: ''
      }
    );
    this.handleValChange = this.handleValChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleValChange(e){
    this.setState({code: e.target.value});

  }
  render(){
    if(this.state.redirect){
      return( 
        <Redirect to='/button-setup'/>
      )
    }else{
      return(
        <div className='content _v_screens' id="dispensaryPage">
          <h1 className='heading'>Beta Registration</h1>
          <p className='tagline'>Please enter the 6 digit code given to you by your dispensary</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="code" placeholder="6 digit code inputs here" value={this.state.code} onChange={this.handleValChange} />
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
    if(_this.state.code === ''){
      _this.setState({error: '*Required'});
    }else{
      var obj = {"code" : ""};    
      obj['code'] = _this.state.code;  
      var data = JSON.stringify(obj);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
         var response = JSON.parse(this.responseText); 
          if(response.status === 'Success'){
            _this.setState({error: '', success: <span className="_form_success">Code Verified</span>});
            setTimeout(function(){
              _this.setState({redirect: true});
            }, 1000);
          }else{
            if('code' in response){
              _this.setState({error: response.code});
            }else if('detail' in response){
              _this.setState({error: response.detail});
            }            
          }
        }
      });

      xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/virtualiot/register/");
      xhr.setRequestHeader("authorization", authToken);
      xhr.setRequestHeader("content-type", "application/json");

      xhr.send(data);
    }
  }
}
export default DispensaryPage;