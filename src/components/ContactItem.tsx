import * as React from 'react';
import * as PropTypes from 'prop-types';


class ContactItem extends React.Component<any, any> {
  static propTypes: {};
  
  constructor(props: any){
    super(props);
    this.state = {
      // name: props.name,
      // email: props.email,
      // phone: props.phone,
      editable: false,
    };

    this.state.editable = false;

    this.updateDetails = this.updateDetails.bind(this);
  }

  updateDetails(event: any){
    event.preventDefault();

    if(this.state.editable === false){
      return this.setState({
        editable: true,
      });
    }

    this.setState({
      editable: false,
    });

    this.props.updateContact(event, )



  }
  
  
  render(){
    const editable = this.state.editable;
    const user = this.props.contact;

    return (
      <form onSubmit={this.updateDetails} className="contact-item">
        <input name="name" type="text" value={user.name} disabled={editable}/>
        <input name="email" type="email" value={user.email} disabled={editable}/>
        <input name="phone" type="number" value={user.number} disabled={editable}/>
        <button type="submit">{editable === true ? 'Finalize' : 'Edit'}</button>
      </form> )
  }
};

ContactItem.propTypes = {

  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
  })
};

export default ContactItem;