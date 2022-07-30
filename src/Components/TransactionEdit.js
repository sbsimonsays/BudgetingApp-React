import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const API = process.env.REACT_APP_API_URL;

function TransactionEdit() {
  let { index } = useParams();
  const nav = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    item_name: "",
    from: "",
    amount: 0,
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction, [event.target.id]: Number(event.target.value),
    });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.error(error));
  }, [index]);

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        nav(`/transactions/${index}`);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div className="Edit">
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          id="date"
          type="text"
          value={transaction.date}
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        <label htmlFor="item_name">Name:</label>
        <input
          name="item_name"
          id="item_name"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          placeholder="From"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          name="amount"
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleNumberChange}
          placeholder="Amount"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          name="category"
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder="Category"
          required
        />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <Button variant="info">Back</Button>
      </Link>
    </div>
  );
}

export default TransactionEdit;
