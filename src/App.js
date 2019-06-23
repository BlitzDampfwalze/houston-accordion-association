import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Houston Accordion Association
        </h1>
        <p>est. 1990</p>

        <div>~~Meets twice a month, every month~~</div>
        <p></p>
        <h3>First Tuesday of the month at:</h3>
        <div>Son Nam Restaurant, 130 Gulfgate Mall, Houston, TX 77087</div>
        <p></p>
        <h3>Third Tuesday of the month at:</h3>
        <div>Pizza Inn, 1801 Mangum Rd, Houston, TX 77092</div>
        <p></p>
        <p>website new... more coming soon...</p>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
