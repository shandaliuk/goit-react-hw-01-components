import PropTypes from 'prop-types';
import { Statistic } from './Statistic/Statistic';
import { StatsList, Stats, Title } from './Statistics.styled';

export const Statistics = ({ title = null, stats }) => {
  return (
    <Stats>
      {title && <Title className="title">Upload stats</Title>}
      <StatsList>
        {stats.map(item => {
          return (
            <Statistic
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </StatsList>
    </Stats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
