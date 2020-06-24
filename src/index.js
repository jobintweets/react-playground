import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function LoginButton(props) {
  return (
    <div>
    <p>You are logged out</p>
    <button onClick={props.onClick}>
      Login
    </button>
    </div>
    );
}

function LogoutButton(props) {
  return (
    <div>
    <p>Your are logged in.</p>
    <button onClick={props.onClick}>
      Logout
    </button>
    </div>
    
  );
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let result;
    if (isLoggedIn) {
      result = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      result = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
      <h1>Welcome to my application</h1>
       {result}
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  unreadMessages.forEach(element => {
    console.log(element);
  });
  return (
    <div>
    
      <h1>Hello!</h1>
      {/* Therefore, if the condition is true, the element right after && will appear in the output */}
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

const messages = ['React', 'Re: React', 'Re:Re: React','Jobin'];
ReactDOM.render(
  // <LoginControl />,
  // <Mailbox unreadMessages={messages} />,
  <Page/>,
  document.getElementById('root')
);
serviceWorker.register();
