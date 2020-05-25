import React, { Component } from 'react';
import ToDoInfo from './ToDoInfo';

class ToDoListDisplay extends Component {

    static defaultProps = {
        data: []
    }

    render() {

        const { data, onRemove, onEdit, loginId } = this.props;

        const filteredData = (loginId === 'admin'
            ? data
            : data.filter(info => info.doingStatus === null && info.userId === loginId)
        )

        const list = filteredData.map(
            info => (
                <ToDoInfo
                    key={info.doingId}
                    info={info}
                    onRemove={onRemove}
                    onEdit={onEdit}
                />)
        );

        return (
            <div>
                {list}
            </div>
        )
    }


}

export default ToDoListDisplay;