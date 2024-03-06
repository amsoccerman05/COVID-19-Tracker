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
        <p>Powered by worldometers.info</p>
      </footer>
      <foot>
      <p> Created by Aiden Morrison</p>
      </foot>
    </div>
  );
}

export default App;
