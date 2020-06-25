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

function Blog (props) {
  const sidebar = (
<ul>
  {props.posts.map((post)=>
    <li key={post.id}>
    {post.title}
    </li>
  )}
</ul>
  );
  const content = props.posts.map((post)=>
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
  return (
  <div>
      {sidebar}
      <hr />
      {content}
    </div>
    );
}
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  // <NumberList numbers= {numbers}/>,
  <Blog posts={posts} />,
  document.getElementById('root')
);
serviceWorker.register();
