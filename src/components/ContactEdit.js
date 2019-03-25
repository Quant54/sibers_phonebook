import React from 'react';
import ContactForm from './ContactForm';
import  { connect } from 'react-redux';
import { editContact } from '../actions';
import _ from 'lodash'; //It's new library for me and I try used it, but rumors in the world tell that it has huge power.

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
	let xpeople = state.peoples.filter(( people )=>{
		if (people.id == ownProps.match.params.id) return people;
	});

	return {contact: xpeople[0]}
}

export default connect(mapStateToProps, { editContact })(ContactEdit);