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
    this.deleteRecord = this.deleteRecord.bind(this);
    this.reRenderComponent = this.reRenderComponent.bind(this);
    this.resetList();
  }

  reRenderComponent(){
    this.forceUpdate();
  }

  componentDidMount(){
  //  this.resetList();
  }

  deleteRecord(record: any){
    const self = this;
    return function(event :Event){
      event.preventDefault();

      db.remove({ _id: record._id}, (err :Error) => {
        if(err){
          console.log(err);
          throw err;
        };

        self.resetList();
      })
    }
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
    db.insert({...doc}, (err: Error, doc: Object) => {
      if(err){
        console.log(err);
        throw err;
      }

      this.resetList();
    });

  }

  updateContact(docId :any, updations: Object){
    

    db.update({ _id: docId}, {...updations}, (err: Error) => {
      if(err){
        console.log(err);
        throw err;
      }
    });
  }

  render(){
    return (
    <div className="contactList content">
      <AddContact addContact={this.addContact} />
      {this.state.contacts.map((contact :any) => <ContactItem key={contact._id} contact={contact} updateContact={this.updateContact} deleteRecord={this.deleteRecord(contact)} reRenderComponent={this.reRenderComponent} />)}
    </div>
    );
  }
}

export default ContactList;