import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin: 0 auto 100px auto;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 6px 6px 10px -1px rgba(122, 116, 122, 1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 150px;
  margin: 30px 0;
`;

export const Name = styled.p`
  margin: 20px auto;
  font-weight: bold;
  font-size: 30px;
  margin: 0 0 18px 0;
`;

export const Tag = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 18px 0;
`;

export const Location = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 30px 0;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  background-color: lightgray;
  padding: 14px 0;
  border-top: 1px solid gray;
  border-right: 1px solid gray;

  :last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  color: gray;
  font-weight: 500;
  margin: 10px;
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
