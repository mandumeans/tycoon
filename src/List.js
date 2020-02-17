import React from 'react';
import Form from 'react-bootstrap/Form';
import Item from './item';
import update from 'immutability-helper'

class List extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            textInput: '',
            taskList: [], 
            idVal : 0
        };
    }

    renderTaskList = () => {
        const taskList = this.state.taskList.map((task) => {
            return (
                <li>
                    <Item          
                        id={task.id}
                        index={task.id}
                        text={task.taskName}
                        moveCard={this.moveCard}
                    ></Item>
                </li>
            );
        });
        return (
            <ul>
                {taskList}
            </ul>
        )
    }

    handleKeyDown = (e, callback) => {
        if (e.key === 'Enter') {
            this.state.taskList.push({id:this.state.idVal, taskName: this.state.textInput}); 
            this.setState({
                idVal: this.state.idVal + 1,
                textInput: ""
            });
        }
    };
      
    handleChange = (e) => {
        this.setState({
            textInput: e.target.value
        })
    }

    moveCard = (dragIndex, hoverIndex) => {
        console.log(dragIndex + "," + hoverIndex);
        const dragCard = this.state.taskList[dragIndex];
        
        this.setState({
            taskList : update(
                this.state.list, 
                {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard],]
                }
            )
        });
    }

    render(){
        return (
            <div>
                {this.props.laneName}
                <Form.Control type="text" placeholder="Enter Task Name"
                    value={this.state.textInput}
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyDown} />
                {this.renderTaskList()}
            </div>
        );
    }

}
export default List;