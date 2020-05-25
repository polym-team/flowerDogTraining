import React, { Component } from 'react';

class CreateToDo extends Component {

    state = {
        doing: '',
    }

    ToDoListUp = (e) => {
        this.setState({
            doing: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.doing) {
            alert('Wrong input')
        } else {
            this.props.onCreate(this.state);
        }

        this.setState(
            {
                doing: '',
            }
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.doing}
                    placeholder="Type todo..."
                    onChange={this.ToDoListUp}
                />
                <button type="submit">update</button>
            </form>
        );
    }

}

export default CreateToDo;