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

  

  protected generateRecord(obj :any) {
    return Contact.fields.reduce((record: any, currentField: string) => {

      record[currentField] = obj[currentField];

      return record;

    }, {});
  };

};