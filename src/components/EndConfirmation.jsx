import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../css/Instructions.css';
class EndConfirmation extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='instructionModal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Are you sure?
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Clicking Continue will end the Round 1 for <strong>{this.props.domain}</strong> domain. Are you sure you want to proceed?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className='instructionCloseButton'>Close</Button>
                    <Button onClick={this.props.continue} className='continueButton'>Continue</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EndConfirmation;
