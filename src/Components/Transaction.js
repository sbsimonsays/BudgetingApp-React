import React from "react";

function Transaction({ transaction, index }) {


  return (
    <tr className="Transaction">
      <td>{transaction.date}</td>
      <td>{transaction.from}</td>
      <td>
        <a href={`/transactions/${index}`}>{transaction.item_name}</a>
      </td>
      <td>{transaction.amount > 0 
          ? <span className="positive">${transaction.amount.toFixed(2)}</span>
          : <span className="negative">${transaction.amount.toFixed(2)}</span>  }
    </td>
    </tr>
  );
}

export default Transaction;
