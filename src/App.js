import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './containers/Chart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://ukulelewednesdays.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src="https://pbs.twimg.com/profile_images/1033135509206380544/xABx42As_400x400.jpg" className="App-logo" alt="logo" />
        </a>
      </header>
      <Chart />
    </div>
  );
}

export default App;
