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

export default ContactList;
