import * as React from 'react';
import * as PropTypes from 'prop-types';

import Contact from '../Contact';

class ContactItem extends Contact {
  
  constructor(props: any){
    super(props);
    this.state = {

      editable: false,

    };

    this.updateDetails = this.updateDetails.bind(this);
  }

  updateDetails(event: any){
    event.preventDefault();

    if(this.state.editable === false){
      return this.setState({
        editable: true,
      });
    }

    this.setState({
      editable: false,
    });

    this.props.updateContact(this.props.contact, this.generateRecord());

  }
  
  
  render(){
    const editable = this.state.editable;
    const user = this.props.contact;

    return (
      <form onSubmit={this.updateDetails} className="contact-item">
        <input name="name" type="text" defaultValue={user.name} ref={(input) => this.name = name}  disabled={!editable}/>
        <input name="email" type="email" defaultValue={user.email} ref={(email) => this.email = email} disabled={!editable}/>
        <input name="phone" type="number" defaultValue={user.number} ref={(phone) => this.phone = phone} disabled={!editable}/>
        <button type="submit">{editable === true ? 'Finalize' : 'Edit'}</button>
      </form> )
  }
};

ContactItem.propTypes = {

  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
  }).isRequired
};

export default ContactItem;