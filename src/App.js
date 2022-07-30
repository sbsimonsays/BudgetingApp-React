import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Transactions from './Components/Transactions';
import TransactionNew from './Components/TransactionNew';
import TransactionDetail from './Components/TransactionDetail';
import TransactionEdit from './Components/TransactionEdit';
import Error from './Components/Error';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Transactions />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/new" element={<TransactionNew />} />
            <Route path="/transactions/:index" element={<TransactionDetail />} />
            <Route path="/transactions/:index/edit" element={<TransactionEdit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
