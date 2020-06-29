import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';

function Contacts() {
  return(
  <div className="Contacts">
  <h1>Welocome to Contacts component!!!1</h1>
  </div>
  ); 
}

function Chat() {
  return (
  <div className="Chat" >
  <h1>Welcome to chat component!!1</h1>
  </div>
  );
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

  function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
    <h2>Fancy Border!!</h2>
      {props.children}
    </div>
  );
}
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
      
    </FancyBorder>
  );
}
ReactDOM.render(
  <SplitPane
    left={ <Contacts />}
    right = {<Chat/>}
  />,
  document.getElementById('root')
);
serviceWorker.register();
