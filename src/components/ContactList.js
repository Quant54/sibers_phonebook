import React from 'react';
import { Table , Button, Row, Col, Card} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../actions';
import FontAwesome from 'react-fontawesome';




class ContactList extends React.Component {

 deleteClickContact (e) {
  console.log(e);
  this.props.deleteContact(e);
  return; 
}

  PeopleRender (peoples) {
    peoples.sort((a,b)=>(a.name < b.name ? !this.props.sort: this.props.sort));
  return  peoples.map((people,index) => { return (
    <Row key={ index } className="bg-white p-4  border-bottom">
      <Col sm="4" md="3" xs="12" className="text-center"> 
        <img className="rounded-circle" src={ people.avatar } />
      </Col>

      <Col sm="5" md="6" xs="12" className="text-center text-sm-left">
        <label>{ people.name }</label><br/>
        <FontAwesome
        className='super-crazy-colors mr-2 text-secondary'
        name='lightbulb'

        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.5)' }}
        />
        <span className="text-muted small"> #{ people.id }</span><br/>
        <FontAwesome
        className='super-crazy-colors mr-2 text-secondary'
        name='phone'

        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.5)' }}
        />
        <span className="text-muted small">{ people.phone }</span><br/>
        <FontAwesome
        className='super-crazy-colors mr-2 text-secondary'
        name='envelope'
    
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.5)' }}
        />
        <span className="text-muted small">{ people.email }</span>
        <br/>
        
      </Col>
      <Col sm="3" md="3" xs="12"  className="text-center pt-3">
        <Link to={`/edit/${people.id}`} >
        <Button size="sm" color="info" className="w-100">Edit</Button>
        </Link>
        <Button size="sm" color="danger" className="w-100" onClick={() => this.deleteClickContact(people.id)}>Delete</Button>
      </Col>

    </Row>
    );}

    );
}
	render() {
		return (
     
  		<Card >			

        
	{this.PeopleRender(this.props.peoples)}

 
      </Card>

		);
	}

}
const mapStateToProps = (state) => {
	return {peoples: state.peoples.filter(people => people.name.includes(state.search)) }
//  return {peoples: state.peoples }
}
export default connect (mapStateToProps, { deleteContact })(ContactList);