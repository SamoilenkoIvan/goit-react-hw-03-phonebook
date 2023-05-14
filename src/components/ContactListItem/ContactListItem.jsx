import React from 'react';
import PropTypes from 'prop-types';
function ContactListItem(props) {
  return (
    <li>
      {props.contact.name} - {props.contact.number}
      <button onClick={() => props.onDelete(props.contact.id)}>Delete</button>
    </li>
  );
}
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};
export default ContactListItem;