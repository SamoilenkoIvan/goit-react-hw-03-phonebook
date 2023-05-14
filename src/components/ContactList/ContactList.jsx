import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';

function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} onDelete={props.onDelete} />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func,
};
export default ContactList;
