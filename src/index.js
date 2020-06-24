import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
    <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date.toLocaleDateString()}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

class  Clock extends React.Component  {
  constructor(props) {
super(props);
this.state = {
  date:new Date()
}
  }
  //life cycle method
  /***
   * The componentDidMount() method runs after 
   * the component output has been rendered to the DOM. 
   */
  componentDidMount() {
    setInterval( () => this.tick(), 1000 );
  }
// life cycle method
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

tick() {
  this.setState({ date: new Date()});
}
  render () {
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
  }

ReactDOM.render(
<Clock/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
