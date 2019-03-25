import React from 'react';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { searchChange } from '../actions';

class SearchForm extends React.Component {
	
	contactSearch = (data) => {
		this.props.searchChange(data.target.value);
	}

	render() {
		return (
			      <InputGroup>
			        <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
			        <Input placeholder="Please, type name.."  type="text"  onChange={this.contactSearch} />
			      </InputGroup>
			      );
	}
}

const mapStateToProps = (state) => {
	return {search: state.search}
}

export default connect(mapStateToProps, { searchChange })(SearchForm);