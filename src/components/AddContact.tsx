import * as React from 'react';
import * as PropTypes  from "prop-types";
import Contact from '../Contact';

class AddContact extends Contact {

  constructor(props: any){
    super(props);

    this.validate = this.validate.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  validate(){
    return AddContact.fields.every((field: string) => this[field] ? this[field].value.trim() : null);
  }

  clearFields(){
    AddContact.fields.forEach((field: string) => this[field].value = '');
  }

  addContact(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    this.props.addContact(this.generateRecord());

    this.clearFields();

  }


  render(){


    return (<form onSubmit={this.addContact} className="add-contact">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input name="name" ref={name => this.name = name} type="text"/>
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input name="email" ref={email => this.email = email} type="text"/>
    </div>
    
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input name="phone" ref={phone => this.phone = phone} type="number"/>
    </div>

    <div className="form-group">
      <label htmlFor="">&nbsp;</label>
      <button type="submit" className="add-item" onClick={this.props.addItem} disabled={!this.validate()}>Add Contact</button>
    </div>
    
    </form>);
  }
  
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default AddContact;