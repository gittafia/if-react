/* eslint-disable func-names */
import './App.css';
import React from 'react';

import data from './constants/data';
import HomeGuest from './components/HomeGuestsSection/HomeGuest';

const App = function () {
  return (
    <section className="recommendations">
      <div className="container">
        <div className="recommendations__title">
          <h2>Homes guests loves</h2>
        </div>
        <HomeGuest data={data} />
      </div>
    </section>
  );
};

export default App;
