import React from 'react';
import logo from './logo.svg';
import { DatePicker } from 'antd';
import Products from './Products'
import Home from './Home'
import Detail from './Detail'
import Success from './Success'
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Products} />
      <Route path="/home" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/success" component={Success} />
    </Router>
  );
}

export default App;
