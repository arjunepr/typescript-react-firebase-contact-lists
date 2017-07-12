import { Component } from 'react';

export default abstract class Contact extends Component<any, any> {

  name: HTMLInputElement | null;
  email: HTMLInputElement | null;
  phone: HTMLInputElement | null;

  static fields: Array<string> = ['name', 'email', 'phone'];

  static propTypes: {};

  [index: string]: any;

  

  constructor(props :any){
    super(props);

    this.generateRecord = this.generateRecord.bind(this);
  }

  

  generateRecord(){
    return this.fields.reduce((record: any, currentField: string) => {

      record[currentField] = this[currentField].value.trim();

      return record;

    }, {});
  };

};