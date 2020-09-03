import React from 'react';
import {useState} from 'react';
import {Container, Card, Button, Modal} from 'react-bootstrap';
import CalendarPicker from './CalendarPicker.js';
import CreateMeetingForm from './CreateMeetingForm.js';
import './dashboard.css';

function CreateMeetingModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
        <Button variant="success"
        style = {{border: 'hidden', color: 'white', width: '40%'}}
        onClick={handleShow}
        className = "btn-rounded mx-auto">create meeting +</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className = "text-center">Create a Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreateMeetingForm/>
        </Modal.Body>
      </Modal>
      </>
    );
}

export default CreateMeetingModal;