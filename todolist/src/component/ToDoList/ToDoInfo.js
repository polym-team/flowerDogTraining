import React, { Component } from 'react';

class ToDoInfo extends Component {

    static defaultProps = {
        info: {
            doingId: 0,
            doing: '',
            userId: 'error',
            doingStatus: 'error',
        }
    }

    handleDelete = () => {
        const { info, onRemove } = this.props;
        onRemove(info.doingId);
    }

    handleEdit = () => {
        const { info, onEdit } = this.props;
        onEdit(info.doingId, info.doing);
    }

    render() {

        const style = {
            border: '1px solid black',
            padding: '5px',
            margin: '5px'
        };

        const {
            doingId, doing, userId, doingStatus
        } = this.props.info;

        return (
            <div style={style}>
                <input type="checkbox"></input>
                {doingId} | {doing} | {userId} | {doingStatus}
                <button onClick={this.handleDelete}>Del</button>
                <button onClick={this.handleEdit}>Edit</button>
            </div>
        );
    }

}

export default ToDoInfo;