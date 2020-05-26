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
          <div
            style={{
              width: '100pt',
              border: 'solid black 1px',
              margin: '10px',
              padding: '5px',
            }}>
            admin / admin<br />
            A / 1234<br />
            b / 1111
          </div>
        </div>
      )
    }
  }

}

export default App;