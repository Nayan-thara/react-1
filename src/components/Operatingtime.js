import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';



function Operatingtime({ timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>MON: {timedata.Monday}</ListGroup.Item>
                        <ListGroup.Item>TUE: {timedata.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>WED: {timedata.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>THURS: {timedata.Thursday}</ListGroup.Item>
                        <ListGroup.Item>FRI: {timedata.Friday}</ListGroup.Item>
                        <ListGroup.Item>SAT: {timedata.Saturday}</ListGroup.Item>
                        <ListGroup.Item>SUN: {timedata.Sunday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>

           
        </>
    )
}

export default Operatingtime