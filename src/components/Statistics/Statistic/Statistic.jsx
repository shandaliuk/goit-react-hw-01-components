import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { StatItem, Percentage, Label } from './Statistic.styled';

export const Statistic = ({ label, percentage }) => {
  return (
    <StatItem color={getRandomHexColor()}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
