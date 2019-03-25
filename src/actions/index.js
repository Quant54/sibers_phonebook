import axios from 'axios';
const BASE_URL = 'http://demo.sibers.com';

export const searchChange = search =>{
	return {
		type: 'SEARCH_CHANGE',
		payload: search
	};
};

export const addContact = contact => {

	return {
		type: 'ADD_CONTACT',
		payload: contact
	}
};

export const editContact = (contact, form) => {
	return {
		type: 'EDIT_CONTACT',
		payload: {...form, 'id':contact}
	}
}


export const searchClear = () => {

	return {
		type: 'CLEAR_SEARCH'
	}
};

export const deleteContact = contact => {

	return {
		type: 'DELETE_CONTACT',
		payload: contact
	}
};


export const fetchContacts = () => async dispatch => {
	const response = await axios.get(BASE_URL + '/users');
		
	dispatch({		type: 'FETCH_CONTACTS',		payload: response.data	});
};
