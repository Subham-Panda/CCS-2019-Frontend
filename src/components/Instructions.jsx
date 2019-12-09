import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../css/Instructions.css';
class Instructions extends React.Component {
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
                        Instructions
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>The first round of CCS is conducted online and is mandatory for inductions.</li>
                        <li>The first round consists of 4 domains.</li>
                        <li>Participants can attempt more than one domain.</li>
                        <li>Each domain will contain 10 questions.</li>
                        <li>Each domain has been allotted a maximum time of 30 minutes, hence descriptive answers are expected.</li>
                        <li>Participants are requested to answer the questions honestly in spirit of the event.</li>
                        <li>Evaluations are up to the discretion of CSI.</li>
                        <li>Inductions are only open for 1st year students.</li>
                        <li>Submissions have been extended till 12:00 p.m. on Wednesday, 11/12/2019.</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className='instructionCloseButton'>Close</Button>
                    <Button onClick={this.props.continue} className='continueButton'>Continue</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Instructions;
