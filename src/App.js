import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

  state = {
    usernames : [
      {username:'hyginus'},
      {username:'eze'}
    ]
  }

  changeUsername = (event) => {
    this.setState({
      usernames : [
        {username:event.target.value},
        {username:'eze'}
      ]
    })
  }

  render(){
    return(
      <div className="App">
        <UserInput changeUsername={this.changeUsername} username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[1].username}/>
      </div>
    )
  }

}

export default App;
