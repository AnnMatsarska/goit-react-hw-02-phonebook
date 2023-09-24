import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  width: 250px;

  border: 1px solid rgb(237, 95, 48);

  border-radius: 6px;
  margin-top: 6px;
  padding: 6px 8px;
`;

export const Button = styled.button`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 6px 8px;
  cursor: pointer;
  font-weight: 700;
  color: white;
  background-color: rgb(237, 95, 48);
  border: none;
  border-radius: 6px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &: hover {
    background-color: rgb(56, 52, 94);
  }
`;
