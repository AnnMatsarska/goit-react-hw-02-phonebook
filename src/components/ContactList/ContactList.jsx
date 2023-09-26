import { List, Item } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactItem
              name={name}
              number={number}
              id={id}
              handleDelete={handleDelete}
            />
          </Item>
        );
      })}
    </List>
  );
};

// {name}: {number}
//             <Button type="button" onClick={() => handleDelete(id)}>
//               Delete
//             </Button>
