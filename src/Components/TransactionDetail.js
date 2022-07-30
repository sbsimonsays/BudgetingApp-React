import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
      <span>
        {" "}
        <h2>Date of Transaction: {transaction.date}</h2>
      </span>
      <span>
        {" "}
        <h2>Transaction: {transaction.item_name}</h2>
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
        <Button variant="secondary">Back</Button>
      </Link>
      <Link to={`/transactions/${index}/edit`}>
        <Button variant="warning">Edit</Button>
      </Link>
      <Link to={`/transactions`}>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Link>
    </div>
  );
}

export default TransactionDetail;
