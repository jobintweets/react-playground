import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const numbers = [1, 2, 3, 4, 5];
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number*2}</li>
  );
  console.log(listItems);
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
  <NumberList numbers= {numbers}/>,
  document.getElementById('root')
);
serviceWorker.register();
