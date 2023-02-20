import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  margin: 0 auto 100px auto;
  display: flex;
  flex-direction: column;
  //   align-items: center;
  background-color: lightgray;
  box-shadow: 6px 6px 10px -1px rgba(122, 116, 122, 1);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: gray;
  text-align: center;
  margin: 30px 0;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const Label = styled.span`
  color: white;
`;
export const Percentage = styled.span`
  font-size: 25px;
  color: white;
`;
