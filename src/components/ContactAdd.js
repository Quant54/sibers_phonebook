import React from 'react';
import { connect } from 'react-redux';
import { addContact, searchClear } from '../actions';
import  ContactForm from './ContactForm'

class ContactAdd extends React.Component {

  submitForm = formValues => {
      this.props.addContact(formValues)
      this.props.history.goBack();
      this.props.searchClear();

  }
	render() {
		return (
      <div>
        <h5 className="text-secondary">Adding new contact:</h5>
        <ContactForm onSubmit={this.submitForm}/>
      </div>
			);
	}
}

export default connect(null,{addContact,searchClear})(ContactAdd);
