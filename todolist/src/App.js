import React, { Component } from 'react';
import ToDoListPage from './component/ToDoList/ToDoListPage';
import Login from './component/Login/Login'

class App extends Component {

  state = {
    loginId: '',
  }

  loginStateUpdate = (idUpdate) => {
    this.setState({
      loginId: idUpdate
    });
  }

  render() {
    if (this.state.loginId) {
      return (
        <div>
          <ToDoListPage
          loginId={this.state.loginId}
          logout={this.loginStateUpdate}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Login
            onLogin={this.loginStateUpdate}
          />
          test id, pw are 'ddd'
        </div>
      )
    }
  }

}

export default App;