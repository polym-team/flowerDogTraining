import React, { Component } from 'react';

class ToDoInfo extends Component {

    static defaultProps = {
        info: {
            id: 0,
            doing: '',
    }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            id, doing
        } = this.props.info;

        return (
            <div style={style}>
                <p>id: {id}</p>
                <p>doing: {doing}</p>
            </div>
        );
    }

}

export default ToDoInfo;