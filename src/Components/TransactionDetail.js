import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetail() {
  const { index } = useParams();
  const nav = useNavigate();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => nav("/transactions"));
  };

  return (
    <div className="Detail">
      <h1>Transaction Show Page</h1>
      <span>
        {" "}
        <h2>Date: {transaction.date}</h2>
      </span>
      <span>
        {" "}
        <h2>Name: {transaction.item_name}</h2>
      </span>
      <span>
        {" "}
        <h2>From: {transaction.from}</h2>
      </span>
      <span>
        {" "}
        <h2> Category: {transaction.category}</h2>
      </span>
      <span>
        {" "}
        <h2> Amount: ${transaction.amount}</h2>
      </span>
      <Link to={`/transactions`}>
        <button>Back</button>
      </Link>
      <Link to={`/transactions/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/transactions`}>
        <button onClick={handleDelete}>Delete</button>
      </Link>
    </div>
  );
}

export default TransactionDetail;
