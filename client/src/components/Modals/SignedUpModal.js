import React from 'react';
import { useHistory } from "react-router";
import {Button, Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Logo from '../../images/modalLogo.jpg'
import './style.css';

const SignedUpModal = (props) => {
    console.log("props for modals: ", props);

    const history=useHistory();

    return (
      <Modal className="Modal" id="contained-modal-title-vcenter" show={props.status}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">
          <img src={Logo} alt="Queen St. Market"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <Row className="greatTaste">You're officially a member!</Row>
        </Modal.Body>
        <Modal.Body className="d-flex justify-content-center text-center">
          <Row className="itemAdded">Click the Log-In link below to sign-in to your account and start shopping!.</Row>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100 d-flex justify-content-end">
          <Button className="addModalClose" onClick={()=>history.push("/login")} href="#" >Log-In </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    );
}


export default SignedUpModal;