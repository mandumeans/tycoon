import React from 'react';
import List from './List'; 
import {useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


class Board extends React.Component {

    constructor(props){
        super(props);
        this.setState({
            laneName: "",
        });
        this.laneList = [];
    }

    renderTopic() {
        let { id } = useParams();
        return <h3>{id} 게시판</h3>;
    }

    setName = (value) => {
        this.setState({
            laneName: value,
        });
    };

    _handleKeyDown = (e, callback) => {
      if (e.key === 'Enter') {
        callback();
      }
    };

    _onChange = (e, callback) => {
        callback();
    };

    renderLaneList = () => {
        return this.laneList.map(laneName => {
            return (                
                <div className="board-default boardMakeItem"> 
                    {laneName}
                </div>
            );
        });
    } 


    render(){
        return (
            <div>
                <this.renderTopic />
                <ListGroup horizontal>
                    <div>
                        {this.renderLaneList()}
                    </div>
                    <div className="board-default boardMakeItem">
                        <Form.Control type="text" placeholder="Enter List Name" onChange={e => this.setName(e, () => this.setState({laneName:e.target.value}))} onKeyDown={e => this._handleKeyDown(e, () => this.laneList.push(e.target.value))} />
                    </div>
                </ListGroup>
            </div>
        );
    }

}
export default Board;