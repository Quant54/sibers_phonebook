import React from 'react';
import ContactForm from './ContactForm';
import  { connect } from 'react-redux';
import { editContact } from '../actions';
import _ from 'lodash';

class ContactEdit extends React.Component {
	submitForm = (formValues) => {

		this.props.editContact(this.props.match.params.id, formValues);
		this.props.history.goBack();

		return;
		//
	}
	render() {

		if (!this.props.contact) return (<div>LOADING...</div>); 
		return (
				<div>
					<h1>Edit Contact</h1>
					<ContactForm 	initialValues={_.pick(this.props.contact, 'name', 'phone', 'email')} onSubmit = {this.submitForm}/>
				</div>
			);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {contact: state.peoples[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { editContact })(ContactEdit);