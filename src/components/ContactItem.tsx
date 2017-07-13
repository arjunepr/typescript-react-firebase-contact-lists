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
    this.cancelUpdation = this.cancelUpdation.bind(this);
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
    event.preventDefault();
    this.setState(prevState => ({ deleteMode: !prevState.deleteMode, editable: false }));
  }

  cancelUpdation(event :React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();

    this.setState({ editable: false });

    Object.keys(this.updationRecord).forEach(field => {
      this.updationRecord[field].value = this.props.contact[field];
    });
  }
  
  
  render(){
    const editable = this.state.editable;
    const user = this.props.contact;

    let finalBlock;

    if(!this.state.deleteMode){
      finalBlock = <span>
          <button className="btn btn-blue" type="submit">{editable === true ? 'Finalize' : 'Edit'}</button>
          {editable === true ? 
            <button className="btn btn-gold" onClick={this.cancelUpdation}>Cancel</button> : 
            <button className="btn btn-red" onClick={this.toggleDeleteMode} >Delete</button>  
          }
          
        </span>;
    } else {
      finalBlock = <span>
        <button className="btn btn-red" onClick={this.props.deleteRecord}>Confirm Deletion</button>
        <button className="btn btn-blue" onClick={this.toggleDeleteMode}>Cancel</button>
        <div className="confirmationText">Are you sure you would like to delete?</div>
      </span>
    }

    return (
      <form onSubmit={this.updateDetails} className="contact-item">
        <input className="input-saved" name="name" type="text" defaultValue={user.name} ref={(input) => this.updationRecord.name = name}  disabled={!editable}/>
        <input className="input-saved" name="email" type="email" defaultValue={user.email} ref={(email) => this.updationRecord.email = email} disabled={!editable}/>
        <input className="input-saved" name="phone" type="text" defaultValue={user.phone} ref={(phone) => this.updationRecord.phone = phone} disabled={!editable}/>
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