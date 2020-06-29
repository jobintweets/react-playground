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
function WelcomeDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
      {props.message}
      </p>
      {props.children}
       </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }
render() {
    return (
      <WelcomeDialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </WelcomeDialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
ReactDOM.render(
  // <SplitPane
  //   left={ <Contacts />}
  //   right = {<Chat/>}
  // />,
  <SignUpDialog 
    
  />,
  document.getElementById('root')
);
serviceWorker.register();
