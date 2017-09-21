import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import DateTimePicker from 'react-widgets/lib/DateTimePicker';

function submit(values){
  console.log(values);
  
// var data = null;
var data = JSON.stringify(values)
var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    // console.log(response);
    var response = this.responseText;    
    console.log(response);
    if(response.indexOf('non_field_errors') >= 0){
      console.log('failed');      
    }else{
      console.log('success');
    }
  }
});
xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/email/register/");
xhr.setRequestHeader("content-type", "application/json");
xhr.send(data);

}

const required = value => value ? undefined : '*Required';
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value =>
  value && value.length < min ? `Must be >${min} digits` : undefined;
// const maxLength15 = maxLength(15);
const passwordMinLength = minLength(6);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>    
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="field__error">{error}</span>) || (warning && <span className="field__error">{warning}</span>))}
    </div>
  </div>
)

const RegisterForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="username" type="text"
        component={renderField} label="Username"
        validate={[ required ]}
      />
      <Field name="password" type="password"
        component={renderField} label="password"
        validate={[ required, passwordMinLength ]}
      />   
      <Field name="first_name" type="text"
        component={renderField} label="Firstname"
        validate={[ required ]}
      /> 
      <Field name="last_name" type="text"
        component={renderField} label="Lastname"
        validate={[ required ]}
      />   
      <Field name="phone" type="text"
        component={renderField} label="Phone Number"
        validate={[ required ]}
      />
      <Field name="email" type="email"
        component={renderField} label="Email Address"
        validate={[required, email]}
      />
      <div className="buttons-box">
        <a className='rtsignup' onClick={handleSubmit(submit)}>Create account</a>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'registerForm' // a unique identifier for this form
})(RegisterForm)