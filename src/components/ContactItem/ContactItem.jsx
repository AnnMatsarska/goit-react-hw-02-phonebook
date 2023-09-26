import { Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </>
  );
};
