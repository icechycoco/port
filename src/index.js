import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.css';
// import App from './Home';
import reportWebVitals from './reportWebVitals';

import Home from "./Home";
import Page2 from "./Page/Aboutme";
import Page3 from "./Page/Time";
import Page4 from "./Page/Sandbox";
import Page5 from "./Page/Skill";
import Page6 from "./Page/Interest";
import Page7 from "./Page/Hireme";
// import Page8 from "./Page/Chat"



 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/aboutme" component={Page2} />
     <Route path="/timeline" component={Page3} />
     <Route path="/sandbox" component={Page4} />
     <Route path="/skill" component={Page5} />
     <Route path="/interest" component={Page6} />
     <Route path="/hireme" component={Page7} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
