import PropTypes from 'prop-types';
import { Row, Value } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <Row>
      <Value>{type}</Value>
      <Value>{amount}</Value>
      <Value>{currency}</Value>
    </Row>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
