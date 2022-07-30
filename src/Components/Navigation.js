import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import "../Styles/Navigation.css";

const API = process.env.REACT_APP_API_URL;

function Navigation() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      setTransactions(res.data);
    });
  }, [transactions]);
  
  let totalAmount = transactions
  .map((transactions) => transactions.amount)
  .reduce((a, b) => Number(a) + Number(b), 0);
  
  return (
    <Navbar
      className="navbar"
      sticky="top"
      bg="primary"
      variant="dark"
      expand="lg"
    >
      <div className="container">
        <Link to="/transactions">
          <Button variant="outline-light">Bank of 'Murrica</Button>
        </Link>

        <h3 className="availablemoney">
            AMOUNT AVAILABLE:</h3> 
        <h2 className="navbalance">
          { totalAmount > 0 
          ? <span className="positively">${totalAmount.toFixed(2)}</span>
          : <span className="negatively">${totalAmount.toFixed(2)}</span>  }
        </h2>

        <Link to="/transactions/new">
          <Button variant="outline-light" className="newbutton">
            New Transaction
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}

export default Navigation;
