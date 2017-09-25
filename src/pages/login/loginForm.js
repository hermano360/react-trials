import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from './submit';

const required = value => value ? undefined : '*Required';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>    
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className="field__error">{error}</span>}
    </div>
  </div>
);

const LoginForm = props => {
  const { error, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="username" type="text"
        component={renderField} label="Username"
        validate={[ required ]}
      />
      <Field name="password" type="password"
        component={renderField} label="Password"
        validate={[ required ]}
      />
      {error && <strong>{error}</strong>}      
      <div className="buttons-box">
        <a className='rtlogin' onClick={handleSubmit(submit)}>Login</a>
      </div>  
    </form>
  );
};

export default reduxForm({
  form: 'loginform', // a unique identifier for this form
})(LoginForm);
