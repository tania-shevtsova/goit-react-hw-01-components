import React from 'react';
import PropTypes from 'prop-types';
import css from "./Transactions.module.css";

const TransactionHistory=({items})=>{
    return(
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th scope="col">TYPE</th>
      <th scope="col">AMOUNT</th>
      <th scope="col">CURRENCY</th>
    </tr>
  </thead>

  <tbody>
   {items.map((el)=>(
        <tr key={el.id}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </tr>
   ))}
   </tbody>
   </table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes= {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
    }))
  };