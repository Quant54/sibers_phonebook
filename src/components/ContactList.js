import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

const PeopleRender = (peoples) => {
	return  peoples.map((people,index) => { return (
		<tr key={ index }>
			<th scope="row">{ index }</th>
      <td>{ people.name }</td>
      <td>{ people.email }</td>
      <td>{ people.phone }</td>
		</tr>
		);}

		);
}

class ContactList extends React.Component {
	render() {
		return (
  		<Table borderless>			
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>E-mail</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        
	{PeopleRender(this.props.peoples)}

        </tbody>
      </Table>
		);
	}

}
const mapStateToProps = (state) => {
	return {peoples: state.peoples.filter(people => people.name.includes(state.search))}
//  return {peoples: state.peoples }
}
export default connect (mapStateToProps)(ContactList);