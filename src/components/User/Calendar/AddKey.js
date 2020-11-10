import React, {useState} from 'react';
import {Container, Button, Row, Col, Modal} from 'react-bootstrap';
import KeyForm from './KeyForm.js';

function AddKey() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container>
             <Button
            variant="transparent" 
            size="md" 
            className = "btn-rounded font-weight-bold float-right"
            onClick={handleShow}
            style = {{color: '#9F82F6'}}
            >+</Button>
            <Modal className = "modal-md ml-5" show={show} onHide={handleClose}>
                <Modal.Header className = "w-100" style={{paddingLeft:'42%'}} closeButton>
                    Add a Key
                </Modal.Header>
                <Modal.Body>
                    <KeyForm/>
                </Modal.Body>
            </Modal>
       </Container>
    );
}

export default AddKey;