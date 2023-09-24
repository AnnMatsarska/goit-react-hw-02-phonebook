import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Label htmlFor="search">Find contacts by name:</Label>
      <Input
        id="search"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Search"
      ></Input>
    </>
  );
};
