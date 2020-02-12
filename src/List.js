import React from 'react';
import Form from 'react-bootstrap/Form';
import Item from './item'; 

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
        const moveCard = useCallback(
          (dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex]
            setCards(
              update(cards, {
                $splice: [
                  [dragIndex, 1],
                  [hoverIndex, 0, dragCard],
                ],
              }),
            )
          },
          [cards],
        )
        const taskList = this.taskList.map(taskName => {
            return (
                <li>
                    <Item                     
                        key={1}
                        index={1}
                        id={2}
                        text={taskName}
                        moveCard={moveCard}
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