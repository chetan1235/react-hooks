import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Layout from './Layout';
import Reducer from './Reducer';
import Context from './Context';
import Memo from './Memo';
import Callback from './Callback';
function App() {

  const [state, setstate] = useState({
    appname: 'Simple React App',
    version: '1.0.0',
    auther: 'techR',
    usage: 'This application is for to learn reactjs'
});

  const handleClick = ()=>{
   // let counter = state
     setstate({
        appname: 'Use State Example',
        auther: 'React Hooks',
        version: '17.0.2',
        usage: 'Improve performance',
        
     })
  }

  useEffect(()=>{
    console.log("Component is rendered")
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        AppName: { state.appname }<br/>
        version: { state.version }<br/>
        Author: { state.auther }<br/>
        usage: { state.usage }
        <button onClick={ handleClick }>Click</button>
      </header>
      <Layout></Layout>
      <Reducer title="info"></Reducer>
      <Context></Context>
      <Memo></Memo>
      <Callback></Callback>
    </div>
  );
}

export default App;
