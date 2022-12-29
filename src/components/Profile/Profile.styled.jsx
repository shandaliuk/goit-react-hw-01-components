import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid skyblue;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProfileImage = styled.img`
  display: block;
  width: 100px;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
`;

export const UserTag = styled.p`
  font-size: 12px;
  font-weight: 200;
  margin: 0;
`;

export const UserLocation = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Stats = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  list-style: none;
  padding-bottom: 10px;
`;

export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 200;
  margin-right: 5px;
`;

export const StatQuantity = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
