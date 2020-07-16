import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import userInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Martin'
  }

  usernameChangedHandler =(event) => {
     this.setState({username: event.target.value});

  }
   
  render(){
    return (
    <div>
      <UserInput changed = {this.usernameChangedHandler}
      currentName = { this.state.username}/>
      <UserOutput userName = { this.state.username}/>
      <UserOutput userName = "Andy"/>
      <UserOutput userName = "Sam"/>
    </div>
    
  );
 }
}

export default App;
