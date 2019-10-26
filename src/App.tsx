
import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import logo2 from './logo2.png';

// const stringData : string  = 'string data';


class App extends React.Component {
  public render() {
    // console.log('1', stringData) 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo2} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Typescript</h1>
        </header>
          <ul className='App-intro'>
          <li>see code docs for learning</li>
          </ul>
      
      </div>
    );
  }
}

export default App;
