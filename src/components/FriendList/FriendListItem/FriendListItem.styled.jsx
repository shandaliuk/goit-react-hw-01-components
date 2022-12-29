import styled from 'styled-components';

export const OnlineIndicator = styled.span`
  margin-bottom: 5px;
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const ListItem = styled.li`
  padding: 10px 5px;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
