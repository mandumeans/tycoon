import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import BoardMakerModal from './BoardMakerModal'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class BoardMaker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isModalShow: false
        }
        this.boardModal = React.createRef();
        this.boardList = [];
    }

    handleModalShow = () => {
        this.setState({
            isModalShow: true
        });
    };

    handleModalClose = () => {
        this.setState({
            isModalShow: false
        });
    }

    addBoardList = (boardName) => {
        this.boardList.push(boardName);
        this.handleModalClose();
    }

    renderAllBoards = () => {
        return this.boardList.map(boardName => {
            return <Link to={"read/" + boardName}><Button className="btnBoard" variant="secondary">{boardName}</Button></Link>
        });
    }

    render(){
        return (
            <div className="global-container">
                <div className="global-buttons">
                    <ButtonToolbar>
                        <Button variant="primary">Home</Button>
                    </ButtonToolbar>
                </div>
                <div className="board-maker-buttons">
                    <ButtonToolbar>
                        <Button variant="outline-primary" onClick={this.handleModalShow}>Create a new board...</Button>
                    </ButtonToolbar>
                </div>
                <div className="board-buttons">
                    <BoardMakerModal isModalShow={this.state.isModalShow} handleModalClose={this.handleModalClose} addBoardList={this.addBoardList} />
                    {this.renderAllBoards()}
                </div>
            </div>
        );
    }
}
export default BoardMaker;