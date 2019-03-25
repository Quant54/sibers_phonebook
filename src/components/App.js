import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {BrowserRouter , Link, Route } from 'react-router-dom';
import SearchForm from './SearchForm';
import ContactList from './ContactList';
import ContactAdd from './ContactAdd';
import ContactEdit from './ContactEdit';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';

class AppWrapper extends React.Component {
	render() {
	 if (this.props.contacts.length == 0  ) return (<div>LOADING...</div>);
		return (
			<div>
						<SearchForm />
						<ContactList />
						<Link to="/add" >
							<Button color="danger">Add</Button>
						</Link>
			</div>
			);
	}
}
class App extends React.Component {

	componentDidMount() {
		this.props.fetchContacts();
	}

	render() {
		return (
			<BrowserRouter >
				<Container>
					<Row>
						<Col className=" rounded mt-3 col-12 pt-3">
						<h5 className="text-center">Phone book</h5>		
							<Route path="/" exact component ={() => <AppWrapper contacts={this.props.contacts}/> } />
							<Route path="/add"  component ={ContactAdd} />
							<Route path="/edit/:id"  component ={ContactEdit} />
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		); 
	}
}
const mapStateToProps = (state) => {
	return {contacts: state.peoples};
}
export default connect(mapStateToProps, { fetchContacts })(App);

