import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Board from './Board'; 
import 'bootstrap/dist/css/bootstrap.min.css';

class BoardModal extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    onModalShow = () => {
        this.textInput.current.focus();
    };

    render(){
        return(
            <Modal show={this.props.isModalShow} onShow={this.onModalShow} onHide={this.props.handleModalClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create a new Board</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form.Control type="text" ref={this.textInput} placeholder="Enter Board Name" /></Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.handleModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


class BoardMaker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isModalShow: false
        }
        this.boardModal = React.createRef();
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
                <BoardModal isModalShow={this.state.isModalShow} handleModalClose={this.handleModalClose} />
            </div>
        );
    }

}
export default BoardMaker;