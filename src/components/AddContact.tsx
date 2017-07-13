import * as React from 'react';
import * as PropTypes  from "prop-types";
import Contact from '../Contact';

class AddContact extends Contact {

  constructor(props: any){
    super(props);

    this.state = {
      valid: false,
      name: null,
      email: null,
      phone: null
    }

    this.validate = this.validate.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.addContact = this.addContact.bind(this);
    this.setAndValidate = this.setAndValidate.bind(this);
    this.generateRecord = this.generateRecord.bind(this);
  }

  validate(){
    const valid = AddContact.fields.every((field: string) => this.state[field] ? this.state[field] : null);
    this.setState({ valid });
  }

  clearFields(){
    AddContact.fields.forEach((field: string) => this[field].value = '');
  }

  addContact(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    this.props.addContact(this.generateRecord(this.state));

    this.clearFields();

  }

  setAndValidate(event: React.FormEvent<HTMLInputElement>, field: string) {

    let value = event.currentTarget.value;

    value = typeof value === 'string' ? value.trim() : value;

    this.setState({
      [field]: event.currentTarget.value.trim()
    })

    this.validate();
  }


  render(){


    return (<form onSubmit={this.addContact} className="add-contact">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input name="name" ref={name => this.name = name} type="text" onChange={(event) => this.setAndValidate(event, 'name')}/>
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input name="email" ref={email => this.email = email} type="email" onChange={(event) => this.setAndValidate(event, 'email')}/>
    </div>
    
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input name="phone" ref={phone => this.phone = phone} type="number" onChange={(event) => this.setAndValidate(event, 'phone')}/>
    </div>

    <div className="form-group">
      <label htmlFor="submit">&nbsp;</label>
      <button name="submit" type="submit" className="add-item" onClick={this.props.addItem} disabled={!this.state.valid}>Add Contact</button>
    </div>
    
    </form>);
  }
  
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default AddContact;