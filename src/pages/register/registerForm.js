import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import global from '../../components/common';

const required = value => value ? undefined : '*Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} digits` : undefined;
const minLength = min => value =>
  value && value.length < min ? `Must be >${min} digits` : undefined;
const maxLength13 = maxLength(13);
const passwordMinLength = minLength(6);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>    
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span className="field__error">{error}</span>) || (warning && <span className="field__error">{warning}</span>))}
    </div>
  </div>
)
var google = window.google;
const RegisterForm = class registerForm extends Component{
  constructor(props){
    super();
    this.state = {
      startDate: moment(),
      dateOfBirth: '',
      address: '',
      addressError: ''
    }    
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.verifyAddress = this.verifyAddress.bind(this);
  }
  handleAddress(e){
    this.setState({
      address: e.target.value
    })
  }
  verifyAddress(e){
    var _this = this;
     var addr = _this.state.address;
     if(_this.state.address === ''){
      document.getElementById('_addressError').classList.remove('hide');
      _this.setState({
        addressError: '*Required'
      });
     }else{
      document.getElementById('_addressError').classList.add('hide');     
      _this.setState({
              addressError: ''
            }); 
      var geocoder = new google.maps.Geocoder();      
      geocoder.geocode({
        'address': addr
      }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK && results.length > 0) {          
          // console.log(results);          
          var _country = '';
          results[0].address_components.map(function(name,i){
            if(name.types.indexOf('country') >= 0){
              _country = name.short_name;
            }            
          });
          //if address is not from US
          if(_country === 'US'){
            _this.setState({
              address: results[0].formatted_address
            })
          }else{
            document.getElementById('_addressError').classList.remove('hide');
            _this.setState({
              addressError: 'Invalid Address'
            });
          }
        } else {          
          document.getElementById('_addressError').classList.remove('hide');
            _this.setState({
              addressError: 'Invalid Address'
            });
        }
      });
     }     
  }
  handleChange(date){
    this.setState({
      startDate: date,
      dateOfBirth: moment(date).format("YYYY-MM-DD")
    })    
  }  
  submit(values){
    values['dob'] = this.state.dateOfBirth; 
    values['address'] = this.state.address;   
    if(this.state.address === ''){
      document.getElementById('_addressError').classList.remove('hide');
      this.setState({
        addressError: '*Required'
      });
      return false;
    }else if(this.state.addressError === 'Invalid Address'){
      return false;
    } 
    var data = null;
    document.getElementById("_loader").className = '_show';
    data = JSON.stringify(values);    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var response = this.responseText;    
        if(this.status === 400){
          global.globalErrorHandling("Internal Server Error. Please try again.");
        }else{
          if(response.indexOf('non_field_errors') >= 0){ 
            document.getElementById("_loader").className = '';
          }else{
            document.getElementById("_loader").className = '';
            window.location.href = "/sms-verification"
            localStorage.setItem('userAuthToken', JSON.parse(response).token);
          }
        }        
      }
    });
    xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/email/register/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(data);
  }
  render(){    
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field name="username" type="text"
          component={renderField} label="Username"
          validate={[ required ]}
        />
        <Field name="password" type="password"
          component={renderField} label="Password"
          validate={[ required, passwordMinLength ]}
        />   
        <Field name="first_name" type="text"
          component={renderField} label="First Name"
          validate={[ required ]}
        /> 
        <Field name="last_name" type="text"
          component={renderField} label="Last Name"
          validate={[ required ]}
        />
        <DatePicker 
          placeholder="Date of Birth"
          selected={this.state.startDate}
          onChange={this.handleChange}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          readonly          
        />       
        <div>
          <input name="address" placeholder="Address" type="text" value={this.state.address} onChange={this.handleAddress} onBlur={this.verifyAddress} />
            <span id="_addressError" className="field__error hide">{this.state.addressError}</span>
        </div>        
        <Field name="phone" type="text"
          component={renderField} label="Phone Number"
          validate={[ required, maxLength13 ]}
        />
        <Field name="email" type="email"
          component={renderField} label="Email Address"
          validate={[required, email]}
        />
        <div className="buttons-box">
          <a className='rtsignup' onClick={handleSubmit(this.submit)} >Create account</a>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registerForm' // a unique identifier for this form
})(RegisterForm)