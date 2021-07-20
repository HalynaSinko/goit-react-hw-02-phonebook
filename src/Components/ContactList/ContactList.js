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
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactList;
