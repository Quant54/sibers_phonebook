import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {BrowserRouter , Link, Route } from 'react-router-dom';
import SearchForm from './SearchForm';
import ContactList from './ContactList';
import ContactAdd from './ContactAdd';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';

class AppWrapper extends React.Component {
	render() {
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
		console.log("ld");
	}

	render() {
		return (
			<BrowserRouter >
				<Container>
					<Row>
						<Col className=" rounded mt-3 col-12 pt-3">
						<h5 className="text-center">Phone book</h5>
					
							<Route path="/" exact component ={AppWrapper} />
							<Route path="/add"  component ={ContactAdd} />
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		); 
	}
}

export default connect(null, { fetchContacts })(App);

