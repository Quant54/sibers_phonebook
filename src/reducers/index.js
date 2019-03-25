import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = [
  {name: "Vitaliy", email: "vitalya@mail.com", phone: "+79181488484"},
  {name: "Konstantin", email: "kostya@mail.com", phone: "+79139782488"},
  {name: "Andrew", email: "andrew@mail.com", phone: "+79081587865"},
  {name: "Dmitriy", email: "dima@mail.com", phone: "+79841798148"}
		];





const PeoplesReducer = (state =  [], action) => {
	if (action.type === 'ADD_CONTACT') {
		return [
			...state, 
			action.payload
			];
	}
	else if  (action.type === 'FETCH_CONTACTS') {
		console.log('contacts', action.payload);
		return action.payload;
	}
	else 
		return state;
	
}

const ChangeSearch = (state = [], action ) => {
 	if (action.type === 'SEARCH_CHANGE')
			return action.payload;
		else 
	if (action.type === 'CLEAR_SEARCH') 
			return "";
		else 
			return state;
}


export default combineReducers({
	peoples: PeoplesReducer,
	search: ChangeSearch,
	form: formReducer
});