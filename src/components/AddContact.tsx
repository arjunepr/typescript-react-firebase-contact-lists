import * as React from 'react';

interface InewContact {
  name: HTMLInputElement | null;
  email: HTMLInputElement | null;
  phone: HTMLInputElement | null;

};

class newContact extends React.Component<any, any> implements InewContact {
  email: HTMLInputElement | null;
  phone: HTMLInputElement | null;
  name: HTMLInputElement | null;

  [index: string] : any;

  fields = ['name', 'email', 'phone'];


  constructor(props: any){
    super(props);

    this.validate = this.validate.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  validate(){
    
    return this.fields.every((field: string) => this[field] ? this[field].value.trim() : null);
  }

  clearFields(){
    this.fields.forEach((field: string) => this[field].value = '');
  }


  render(){

    // const newEntry = { 
    //   name: this.name.value.trim()
    // };

    const newEntry = this.fields.reduce((record: any, currentField: string) => {

      record[currentField] = this[currentField].value.trim();

      return record;

    }, {}); 

    return (<form onSubmit={() => { this.props.addContact(newEntry); this.clearFields(); } } className="add-contact">
    <input name="name" ref={node => this.name = node} type="text"/>
    <input name="email" ref={node => this.email = node} type="text"/>
    <input name="phone" ref={node => this.phone = node} type="number"/>
    <button type="submit" className="add-item" onClick={this.props.addItem} disabled={!this.validate()}></button>
    </form>);
  }
  
}

export default newContact;