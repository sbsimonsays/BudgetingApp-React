import React from "react";
import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import "../Styles/Transactions.css";
import axios from "axios";
import Table from "react-bootstrap/Table";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let totalAmount = transactions
    .map((transactions) => transactions.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);

  return (
    <div className="container">
      <h1>
        Amount Available:<span> ${totalAmount.toFixed(2)}</span>{" "}
      </h1>

      <section className="transactionlog">
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item/Transaction</th>
              <th>Category</th>
              <th>From</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Transactions;
