import styled from 'styled-components';

export const StatItem = styled.li`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  background-color: ${p => p.color};
  font-size: 16px;
  font-weight: 600;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

export const Percentage = styled.span`
  font-size: 32px;
  font-weight: 800;
`;
