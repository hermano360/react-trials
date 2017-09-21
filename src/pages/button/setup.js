import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class ButtonSetupPage extends Component{
  constructor(props) {
    super(props);
    console.log('constructor')
    // this.state = ({buttonId: '', error: ''});
    // this.handleValChange = this.handleValChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }  
  handleValChange(e){
    // this.setState({buttonId: e.target.value});
  }
  render(){
    return(
      <div className='content _setup_screen' id="buttonSetup">
        <h1 className='heading'>Button Setup</h1>
        <div class="inner_content">
          <p className='tagline'>Before we get started we have a few questions we need you to answer</p>   
          <div className="_">
            <h2></h2>
          </div>
        </div>             
      </div>
    )    
  }
  handleSubmit(e, values){
    

  }
}
export default ButtonSetupPage;