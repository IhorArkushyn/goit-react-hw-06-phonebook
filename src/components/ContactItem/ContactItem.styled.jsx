import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 16px;
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 60px;
  padding: 3px 5px;
  border: none;
  font-weight: 500;
  border-radius: 10px;

  :hover {
    color: white;
    scale: 1.1;
    cursor: pointer;
    background-color: #234a5c;
    transition: background-color 200ms linear;
    transition: scale 200ms linear;
  }
`;
