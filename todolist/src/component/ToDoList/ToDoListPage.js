import React, { Component } from 'react';
import CreateToDo from './CreateToDo';
import ToDoListDisplay from './ToDoListDisplay'

class ToDoListPage extends Component {

  doingId = 0

  userId = this.props.loginId

  state = {
    information: []
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ doingId: this.doingId++, ...data, userId: this.userId })
    })
  }

  handleLogout = () => {
    this.props.logout('');
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <div>
          Welcome! {this.props.loginId}.
          <button onClick={this.handleLogout}>logout</button>
        </div>
        <CreateToDo
          onCreate={this.handleCreate}
        />
        <ToDoListDisplay data={information} />
      </div>
    );
  }

}

export default ToDoListPage;