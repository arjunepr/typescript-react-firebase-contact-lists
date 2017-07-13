import * as React from 'react';
import * as PropTypes from 'prop-types';

import Contact from '../Contact';

class ContactItem extends Contact {
  
  constructor(props: any){
    super(props);
    this.state = {

      editable: false,
      deleteMode: false
    };

    this.updationRecord = {};

    this.updateDetails = this.updateDetails.bind(this);
    this.generateRecord = this.generateRecord.bind(this);
    this.toggleDeleteMode = this.toggleDeleteMode.bind(this);
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

    this.props.updateContact(this.props.contact, this.generateRecord(this.updationRecord));

  }

  toggleDeleteMode(event :React.MouseEvent<HTMLButtonElement>){
    // event.preventDefault();
    this.setState(prevState => ({ deleteMode: !prevState.deleteMode }));
  }
  
  
  render(){
    const editable = this.state.editable;
    const user = this.props.contact;

    let finalBlock;

    if(!this.state.deleteMode){
      finalBlock = <span>
          <button className="btn" type="submit">{editable === true ? 'Finalize' : 'Edit'}</button>
          <button onClick={this.toggleDeleteMode} className="deletion">Delete</button>
        </span>;
    } else {
      finalBlock = <span>
        <button className="deletion" onClick={this.props.deleteRecord}>Confirm Deletion</button>
        <button className="cancelation" onClick={this.toggleDeleteMode}>Cancel</button>
        <span className="confirmationText">Are you sure you would like to delete?</span>
      </span>
    }

    return (
      <form onSubmit={this.updateDetails} className="contact-item">
        <input className="input-saved" name="name" type="text" defaultValue={user.name} ref={(input) => this.updationRecord.name = name}  disabled={!editable}/>
        <input className="input-saved" name="email" type="email" defaultValue={user.email} ref={(email) => this.updationRecord.email = email} disabled={!editable}/>
        <input className="input-saved" name="phone" type="number" defaultValue={user.phone} ref={(phone) => this.updationRecord.phone = phone} disabled={!editable}/>
        {finalBlock}
      </form> )
  }
};

ContactItem.propTypes = {

  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired
};

export default ContactItem;