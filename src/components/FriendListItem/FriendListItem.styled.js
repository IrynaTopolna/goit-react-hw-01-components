import styled from 'styled-components';

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  margin-right: 14px;
  width: 48px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;
