import React from 'react';
import Form from 'react-bootstrap/Form';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'

class List extends React.Component {
    
    state = {
        textInput: ''
    }
    
    constructor(props){
        super(props);
        this.setState({
            textInput: ""
        });
        this.taskList = [];
    }

    renderTaskList = () => {
        const taskList = this.taskList.map(taskName => {
            return (
                <li>
                    {taskName}
                </li>
            );
        });
        return (
            <ul>
                <DndProvider backend={Backend}>
                    {taskList} 
                </DndProvider>
            </ul>
        )
    }

    handleKeyDown = (e, callback) => {
        if (e.key === 'Enter') {
            this.taskList.push(this.state.textInput); 
            this.setState({
                textInput: ""
            });
        }
    };
      
    handleChange = (e) => {
          this.setState({
              textInput: e.target.value
          })
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