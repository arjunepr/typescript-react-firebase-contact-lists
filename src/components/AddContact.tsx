import * as React from 'react';

export default (props: any) => (
  <form onSubmit={props.handleSubmit} className="add-contact">
    <input name="name" type="text"/>
    <input name="email" type="text"/>
    <input name="phone" type="number"/>
    <button type="submit" className="add-item" onClick={props.addItem}></button>
  </form>
)