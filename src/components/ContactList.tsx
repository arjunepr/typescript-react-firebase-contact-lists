import * as React from 'react';
import AddContact from './AddContact';
import ContactItem from './ContactItem';
import db from '../db';

class ContactList extends React.Component<any, any> {
  constructor(props: any){
    super(props);

    this.state = {
      contacts: []
    };

    this.resetList = this.resetList.bind(this);
    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  componentDidMount(){
   this.resetList();
  }

  resetList(){
    const results = db.find({}, (err :Error, docs: Object) => {
      if(err){
        console.log(err);
        throw err;
      };

      this.setState({
        contacts: docs
      });
    });
  }

  addContact(doc :Object){
    db.insert({doc}, (err: Error, doc: Object) => {
      if(err){
        console.log(err);
        throw err;
      }

      this.resetList();
    });

  }

  updateContact(doc :any, updations: Object){
    
    const doc_id = doc._id;

    db.update({ _id: doc_id}, {updations}, (err: Error) => {
      if(err){
        console.log(err);
        throw err;
      }
    });
  }

  render(){
    return (
    <div className="contactList">
      <AddContact addContact={this.addContact} />
      {this.state.contacts.map((contact :Object) => <ContactItem contact={contact} />)}
    </div>
    );
  }
}

export default ContactList;