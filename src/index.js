import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
return (
    <a href="https://codepen.io/gaearon/pen/vXdGmd?editors=0010" onClick={handleClick}>
      Click me
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn}));
  }
render () {
  return (
    <button onClick={this.handleClick}>
    {this.state.isToggleOn ? 'ON' : 'OFF'}
  </button>
);
}
}
 
  
ReactDOM.render(
<Toggle/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
