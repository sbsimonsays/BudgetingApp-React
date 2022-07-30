import React from 'react';
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
// import Container from 'react-bootstrap/Container';


function Navigation() {
  return (
    <Navbar className='navbar' sticky='top' bg='primary' variant='dark' expand='lg'>
      <div className='container'>
        <button>
        <Link to="/transactions">Bank of 'Murrica</Link>
        </button>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
      </div>
    </Navbar>
  );
}

export default Navigation;