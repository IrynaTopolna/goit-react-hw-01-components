import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 0 auto;
  padding: 0;
  border-spacing: 0;
  border-collapse: unset;
  box-shadow: 3px 7px 12px -5px rgba(0, 0, 0, 0.75);
`;

export const Name = styled.th`
  width: 200px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #4df3e9;
  padding: 10px 0;
  :not(:last-child) {
    border-right: 1px solid #ded2d0;
  }
`;

export const Row = styled.tr`
  display: flex;
  :nth-child(even) {
    background-color: #eae4e4;
  }
`;

export const Info = styled.td`
  border: 1px solid #ded2d0;
  border-top: none;
  border-left: none;
  :first-child {
    border-left: 1px solid #ded2d0;
  }
  padding: 10px 0;
  color: gray;
  width: 200px;
  text-align: center;
`;
