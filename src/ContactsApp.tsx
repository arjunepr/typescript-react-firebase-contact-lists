import * as React from 'react';
import { Component } from 'react';

import AddContact from './components/AddContact';

class ContactList extends React.Component{

  constructor(props: any){
    super(props);
  }

  render(){
    return (
      <div className="contact-list">
        <AddContact />
      </div>
    );
  }

};