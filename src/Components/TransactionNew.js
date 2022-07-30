import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function TransactionNew() {
  const nav = useNavigate();
  const [transaction, setTransaction] = useState({
    date: '',
    item_name: '',
    from: '',
    amount: 0,
    category: '',
  });

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then((response) => nav(`/transactions`))
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: Number(event.target.value)});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  return (
    <div className="New">
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          placeholder="Date"
          onChange={handleTextChange}
        />
        <label htmlFor="item_name">Name:</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          placeholder="Name"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          placeholder="From"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={transaction.category}
          placeholder="Category"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          name="amount"
          type="number"
          id="amount"
          value={transaction.amount}
          placeholder="Amount"
          onChange={handleNumberChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default TransactionNew;
