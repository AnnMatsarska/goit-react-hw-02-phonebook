export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};
