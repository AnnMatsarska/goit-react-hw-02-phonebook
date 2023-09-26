import styled from 'styled-components';

export const Button = styled.button`
  height: 20px;
  text-align: center;

  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  padding: 2px 12px;
  color: white;
  background-color: rgb(237, 95, 48);
  border: none;
  border-radius: 6px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &: hover {
    background-color: rgb(56, 52, 94);
  }
`;
