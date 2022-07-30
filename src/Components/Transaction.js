import React from 'react';

function Transaction({ transaction, index }) {
  return (
    <tr className="Transaction">
      <td>
        <a href={`/transactions/${index}`}>{transaction.date}</a>
      </td>
      <td>
        <a href={`/transactions/${index}`}>{transaction.item_name}</a>
      </td>
      <td>
        <a href={`/transactions/${index}`}>{transaction.category}</a>
      </td>
      <td>
        <a href={`/transactions/${index}`}>{transaction.from}</a>
      </td>
      <td>
        <a href={`/transactions/${index}`}>{transaction.amount}</a>
      </td>
    </tr>
  );
}

export default Transaction;
