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
