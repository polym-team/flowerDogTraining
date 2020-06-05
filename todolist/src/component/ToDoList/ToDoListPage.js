import React, { Component } from 'react';
import CreateToDo from './CreateToDo';
import ToDoListDisplay from './ToDoListDisplay'

class ToDoListPage extends Component {

  loadInfo = JSON.parse(window.localStorage.getItem('toDoList'));

  loadId = JSON.parse(window.localStorage.getItem('doingId'));

  doingId = (this.loadId ? this.loadId : 0)

  loginId = this.props.loginId

  state = {
    information: (this.loadInfo ? this.loadInfo : [])
  }

  doingSave = () => {
    const { doingId } = this;
    const { information } = this.state;
    window.localStorage.setItem('doingId', JSON.stringify(doingId));
    window.localStorage.setItem('toDoList', JSON.stringify(information));
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
    });
  }

  handleRemove = (doingId) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => doingId === info.doingId
          ? { ...info, doing: null, doingStatus: 'deleted' }
          : info
      )
    });
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
    this.props.logout(null);
  }

  handleClear = () => {
    this.doingId = 0;
    this.setState ({
      information: []
    });
  }

  render() {

    this.doingSave();

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
          <button onClick={this.handleClear}>clear!</button>
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