// App.js

import React from 'react';
import './App.css';
import CovidTracker from './CovidTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVID-19 Tracker</h1>
      </header>
      <main>
        <CovidTracker />
      </main>
      <footer>
        <p>Powered by disease.sh</p>
      </footer>
    </div>
  );
}

export default App;
