import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BoardMakerModal extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            textInput: ""
        };
    }

    onModalShow = () => {
        this.textInput.current.focus();
    };

    handleChange = (e) => {
        this.setState({
            textInput: e.target.value
        })
    }
    
    render(){
        return(
            <Modal show={this.props.isModalShow} onShow={this.onModalShow} onHide={this.props.handleModalClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create a new Board</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form.Control type="text" ref={this.textInput} onChange={this.handleChange} placeholder="Enter Board Name" /></Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => this.props.addBoardList(this.state.textInput) }>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default BoardMakerModal;