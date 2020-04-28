import React, { Component } from 'react';
import CreateToDo from './component/CreateToDo';
import ToDoListDisplay from './component/ToDoListDisplay'

class App extends Component {

  id = 0

  state = {
    information: []
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <CreateToDo
          onCreate={this.handleCreate}
        />
        <ToDoListDisplay data={this.state.information} />
      </div>
    );
  }

}

export default App;