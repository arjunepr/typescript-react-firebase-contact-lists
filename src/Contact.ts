import { Component } from 'react';

export default abstract class Contact extends Component<any, any> {

  protected name: HTMLInputElement | null;
  protected email: HTMLInputElement | null;
  protected phone: HTMLInputElement | null;

  protected static fields: Array<string> = ['name', 'email', 'phone'];

  public static propTypes: {};

  [index: string]: any;

  

  constructor(props :any){
    super(props);

    this.generateRecord = this.generateRecord.bind(this);
  }

  

  protected generateRecord(){
    return this.fields.reduce((record: any, currentField: string) => {

      record[currentField] = this[currentField].value.trim();

      return record;

    }, {});
  };

};