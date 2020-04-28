import React, { Component } from 'react';
import ToDoInfo from './ToDoInfo';

class ToDoListDisplay extends Component {

    static defaultProps = {
        data: []
    }

    render() {
        console.log(this.props);

        const { data } = this.props;

        const list = data.map(
            info => (<ToDoInfo key={info.id} info={info} />)
        );

        return (
            <div>
                {list}
            </div>
        )
    }


}

export default ToDoListDisplay;