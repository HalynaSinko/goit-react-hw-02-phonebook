import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li key={id}>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={() => onRemove(id)}>Deleted</button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map((contact) => ContactListItem({ ...contact, onRemove }))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
