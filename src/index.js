import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value :'',
      essay :'Please write an essay!',
      select:'coconut',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName= this.handleName.bind(this);
  }
  handleChange (event) {
    // this.setState({essay: event.target.value});
    this.setState({select:event.target.value});
    console.log(this.state.select);
  }
  handleName (event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
   handleSubmit (event) {
    event.preventDefault();
alert("The name submitted is " + this.state.value);
console.log("The essay submitted is " + this.state.essay);
   }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleName}   />
      </label>
      <label>
          Essay:
          <textarea value={this.state.essay} onChange={this.handleChange} />
        </label>
         <label>
          Pick your favorite flavor:
          <select value={this.state.select} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}
//Example for uncontrolled components
class UncontrolledNameForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.data = React.createRef();
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    alert("Last name is " + this.data.current.value);
    event.preventDefault();
  }
   render () {
     return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" ref={this.input} />
      </label>
       <label>
        LastName:
        <input type="text" ref={this.data} />
      </label>
      <input type="submit" value="Submit" />
    </form>
     );
   }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
  };
  this.handleInputChange = this.handleInputChange.bind(this);
  console.log(this.state);
}
handleInputChange(event) {
  const target = event.target;
          // console.log(target);
  const value = target.name === 'isGoing' ? target.checked : target.value;
  const name = target.name;
console.log(name);
  this.setState({
    [name]: value
  });
}

  render() {
    return (
      <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />
      </label>
    </form>
    );
  }
}
ReactDOM.render(
  <Reservation/>,
  document.getElementById('root')
);
serviceWorker.register();
