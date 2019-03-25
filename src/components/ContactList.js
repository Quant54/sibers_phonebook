import React from 'react';
import { Table , Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../actions';




class ContactList extends React.Component {

 deleteClickContact (e) {
  console.log(e);
  this.props.deleteContact(e);
  return; 
}

  PeopleRender (peoples) {
  return  peoples.map((people,index) => { return (
    <tr key={ index }>
      <th scope="row">{ people.id }</th>
      <td> <img src={ people.avatar } /></td>
      <td>{ people.name }</td>
      <td>{ people.email }</td>

      <td>{ people.phone }</td>
      <td> 
      <Link to={`/edit/${people.id}`} >
        <Button color="info">Edit</Button>
      </Link>
      <Button color="danger"  onClick={() => this.deleteClickContact(people.id)}>Delete</Button>
      </td>
    </tr>
    );}

    );
}
	render() {
		return (
  		<Table borderless>			
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
	{this.PeopleRender(this.props.peoples)}

        </tbody>
      </Table>
		);
	}

}
const mapStateToProps = (state) => {
	return {peoples: state.peoples.filter(people => people.name.includes(state.search))}
//  return {peoples: state.peoples }
}
export default connect (mapStateToProps, { deleteContact })(ContactList);