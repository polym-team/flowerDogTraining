import React, { Component } from 'react';
import CreateToDo from './CreateToDo';
import ToDoListDisplay from './ToDoListDisplay'

class ToDoListPage extends Component {

  doingId = 3

  loginId = this.props.loginId

  deleteDoing = <span style={{ color: "red" }}>deleted</span>

  state = {
    information: [
      {
        doingId: 0,
        doing: 'test1',
        userId: 'A',
        doingStatus: null,
      },
      {
        doingId: 1,
        doing: 'test2',
        userId: 'b',
        doingStatus: null,
      },
      {
        doingId: 2,
        doing: this.deleteDoing,
        userId: 'A',
        doingStatus: 'deleted',
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        doingId: this.doingId++,
        ...data,
        userId: this.loginId,
        doingStatus: null,
      })
    })
    console.log(this.state.information)
  }

  handleRemove = (doingId) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => doingId === info.doingId
          ? { ...info, doing: this.deleteDoing, doingStatus: 'deleted' }
          : info
      )
    })
  }

  handleEdit = (doingId, doing) => {
    const { information } = this.state;
    const editDoing = prompt('Edit', doing);
    if (!editDoing) {
      alert('Wrong input');
    } else {
      this.setState({
        information: information.map(
          info => doingId === info.doingId
            ? { ...info, doing: editDoing }
            : info
        )
      })
    }
  }

  handleLogout = () => {
    this.props.logout('');
  }

  render() {
    const { information } = this.state;

    return (
      <div>
        <div>
          Welcome! <span style={{
            color: "skyblue",
            fontWeight: "bold",
          }}>
            {this.props.loginId}
          </span>.
          <button onClick={this.handleLogout}>logout</button>
        </div>
        <CreateToDo
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
        <ToDoListDisplay
          loginId={this.loginId}
          data={information}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
      </div>
    );
  }

}

export default ToDoListPage;