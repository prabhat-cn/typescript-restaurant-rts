import React, { useState } from 'react';
import './App.css';
import Restaurant from './pages/Restaurant';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-inner">
        <h1 className="head-line" style={{ textAlign: 'center' }}>
          Restaurant Reservation App using RTK
        </h1>
        <div className="ops-inner">
          <Restaurant />
        </div>
      </div>
    </div>
  );
};

export default App;
