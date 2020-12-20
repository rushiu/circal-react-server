import React, {useState} from 'react';
import {ToggleButtonGroup, Button, Col, Row, Card, Image} from 'react-bootstrap'


function ChooseFlowButtons() {
    return(
        <ToggleButtonGroup type="radio" name="options">
        <Col style = {{minWidth: '44%'}}>
        <Button variant="transparent" className = "w-100"  value={1}>
            <Card className="mx-auto w-100" style={{width:'40%'}}>
                <img 
                src = "../assests/CreateCompany.svg"
                className="mx-auto"
                width="150"
                height="150"
                />
                <h5 className="mx-auto mt-5">Create a Company</h5>
                <p className="mx-auto text-center pl-4 pr-4">Create a new company and invite your teammates</p>
            </Card>
        </Button>
        </Col>
        <Col className = "my-auto mx-auto text-center" style = {{width: '2%'}}>
            <h6>or</h6>
        </Col>
        <Col style = {{minWidth: '44%'}}>
            <Button variant="transparent" className = "w-100" value={2}>
                <Card className="mx-auto w-100">
                    <img 
                    src = "../assests/JoinCompany.svg"
                    className="mx-auto"
                    width="200"
                    height="200"
                    />
                    <h5 className="mx-auto">Join a Company</h5>
                    <p className="mx-auto text-center pl-4 pr-4">This requires an access code. Please ask your admin for one.</p>
                </Card>
            </Button>
        </Col>
    </ToggleButtonGroup>
    );
}

export default ChooseFlowButtons;