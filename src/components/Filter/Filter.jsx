export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        id="search"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="search"
      ></input>
    </>
  );
};
