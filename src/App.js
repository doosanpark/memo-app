import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from 'antd';
import 'antd/dist/antd.css';
import Main from "../src/main/component/Main"

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Main/>
      </div>
    </div>
  );
}

export default App;
