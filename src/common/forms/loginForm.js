import React from 'react';
import { Field, reduxForm } from  'redux-form';

const  { DOM: { input, select, textarea } } = React

const LoginForm = (props) => {
	const { handleSubmit, pristine, reset, submitting} = props
	return (
		<form onSubmit={handleSubmit}>
			<div className="fieldBox">
				<Field name="userName" component={input} type="text" placeholder="Username" />
			</div>
		</form>
	)
}
