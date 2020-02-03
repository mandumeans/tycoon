import React from 'react';
import List from './List'; 
import {useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


class Board extends React.Component {

    renderTopic() {
        let { id } = useParams();
        return <h3>{id} 게시판</h3>;
    }

    renderBoardList() {
        return <div>test</div>
    }

    renderMakeNewBoard() {
        return (
            <div>
                <ListGroup horizontal>
                    <Form.Control type="text" placeholder="Enter List Name" />
                    <Form.Control type="text" placeholder="Enter List Name" />
                    <Form.Control type="text" placeholder="Enter List Name" />
                </ListGroup>
            </div>
        );
    }

    render(){
        return (
            <div>
                <this.renderTopic />
                <this.renderBoardList />
                <this.renderMakeNewBoard />
            </div>
        );
    }

}
export default Board;