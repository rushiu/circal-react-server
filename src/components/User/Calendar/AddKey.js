import React, {useState} from 'react';
import {Container, Button, Row, Col, Modal} from 'react-bootstrap';


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
                <Modal.Header closeButton>
                    <p>text</p>
                </Modal.Header>
                <Modal.Body>
                    <p>sup earth</p>
                </Modal.Body>
            </Modal>
       </Container>
    );
}

export default AddKey;