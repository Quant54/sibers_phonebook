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

export const searchClear = () => {

	return {
		type: 'CLEAR_SEARCH'
	}
};


export const fetchContacts = () => async dispatch => {
	const response = await axios.get(BASE_URL + '/users');
		
	dispatch({		type: 'FETCH_CONTACTS',		payload: response.data	});
};
