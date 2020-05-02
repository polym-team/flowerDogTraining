import React, { Component } from 'react';

class ToDoInfo extends Component {

    static defaultProps = {
        info: {
            doingId: 0,
            doing: '',
            userId: 'error',
    }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            doingId, doing, userId
        } = this.props.info;

        return (
            <div style={style}>
                <p>id: {doingId}</p>
                <p>doing: {doing}</p>
                <p>userId: {userId}</p>
            </div>
        );
    }

}

export default ToDoInfo;