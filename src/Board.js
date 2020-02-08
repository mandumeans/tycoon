import React from 'react';
import List from './List'; 
import {useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


class Board extends React.Component {

    state = {
        textInput: ''
    }

    constructor(props){
        super(props);
        this.setState({
            textInput: ""
        });
        this.laneList = [];
    }

    renderTopic() {
        let { id } = useParams();
        return <h3>{id} 게시판</h3>;
    }

    renderLaneList = () => {
        return this.laneList.map(laneName => {
            return (
                <div className="board-default boardMakeItem"> 
                    <List laneName={laneName}/>
                </div>
            );
        });
    }

    handleKeyDown = (e, callback) => {
        if (e.key === 'Enter') {
            this.laneList.push(this.state.textInput); 
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
                <this.renderTopic />
                <ListGroup horizontal>
                    {this.renderLaneList()}
                    <div className="board-default boardMakeItem">
                        <Form.Control type="text" placeholder="Enter List Name"
                            value={this.state.textInput}
                            onChange={this.handleChange} 
                            onKeyPress={this.handleKeyDown} />
                    </div>
                </ListGroup>
            </div>
        );
    }

}
export default Board;