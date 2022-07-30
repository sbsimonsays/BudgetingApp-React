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

  return (
    <div className="container">

      <section className="transactionlog">
        <Table hover striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>To/From</th>
              <th>Item/Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  index={index}
                  transaction={transaction}
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
