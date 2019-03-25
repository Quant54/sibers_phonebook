import React from 'react';
import { Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends React.Component {

  renderError ({error, touched}) {
    if (touched && error) {
      return <div className="text-danger">{error}</div>;
    }
}

 renderInput = ({name, input, label, placeholder, meta}) => {
    return (
     <FormGroup>
       <Label htmlFor ="name">{label}:</Label>
       <Input type={name} {...input}  id={name} placeholder={placeholder} />
       { this.renderError(meta) }
     </FormGroup>
    );
  };

	render() {
		return (
			<Form onSubmit = {this.props.handleSubmit(this.props.onSubmit)}>
  
          <Field name="name" id="name"  component={this.renderInput}  label="Enter name" placeholder="Enter your name, maybe: Valera" />
          <Field name="email" id="email"  component={this.renderInput}  label="Enter email" placeholder="Enter email" />
          <Field name="phone" id="phone"  component={this.renderInput}  label="Enter phone" placeholder="Enter phone"/>

        <Button color="primary"  type="submit" >Save</Button>{' '}
        <Link to="/" >
         <Button color="danger">Cancel</Button>{' '}
        </Link>
      </Form>
			);
	}
}


const validate = (formValues) => {
  const errors = {};

  if (!formValues.name){
    errors.name = 'You must enter a name';
  }
  if (!formValues.email){
    errors.email = 'You must enter a email';
  }
  if (!formValues.phone){
    errors.phone = 'You must enter a phone';
  }
  return errors;

};

export default reduxForm({form: 'contactForm',validate})(ContactForm);