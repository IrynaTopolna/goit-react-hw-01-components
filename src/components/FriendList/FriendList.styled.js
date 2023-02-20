import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0 auto 100px auto;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
  padding: 8px 10px;
  box-shadow: 7px 7px 11px -3px rgba(0, 0, 0, 0.75),
    -2px -2px 12px -5px rgba(0, 0, 0, 0.75);
`;
