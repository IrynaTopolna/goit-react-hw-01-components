import PropTypes from 'prop-types';
import { Table, Name, Row, Info } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Row>
          <Name>Type</Name>
          <Name>Amount</Name>
          <Name>Currency</Name>
        </Row>
      </thead>

      <tbody>
        {items.map(item => (
          <Row key={item.id}>
            <Info style={{ textTransform: 'capitalize' }}>{item.type}</Info>
            <Info>{item.amount}</Info>
            <Info>{item.currency}</Info>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
