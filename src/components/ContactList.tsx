import * as React from 'react';
import AddContact from './AddContact';
import ContactItem from './ContactItem';

class ContactList extends React.Component<any, any> {
  constructor(props: any){
    super(props);
  }

  render(){
    return (
    <div className="contactList">
      <AddContact />
    </div>
    );
  }
}