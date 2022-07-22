import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from "./Home";
import Page5 from "./Page/Skill2";

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/skill2" component={Page5} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
