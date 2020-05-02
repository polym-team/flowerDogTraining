import React, { Component } from 'react';
import ToDoInfo from './ToDoInfo';

class ToDoListDisplay extends Component {

    static defaultProps = {
        data: []
    }

    render() {

        const { data } = this.props;

        const list = data.map(
            info => (<ToDoInfo key={info.doingId} info={info} />)
        );

        return (
            <div>
                {list}
            </div>
        )
    }


}

export default ToDoListDisplay;