import React from 'react';
import { useHistory } from "react-router";
import {Button, Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Logo from '../../images/modalLogo.jpg'
import './style.css';

const SignInModal = (props) => {
    console.log("props for modals: ", props);

    const history=useHistory();

    return (
      <Modal className="Modal" id="contained-modal-title-vcenter" show={props.status}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter d-flex justify-content-center">
          <img src={Logo} className="modalPic col col-center" alt="Queen St. Market"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <Row className="itemAdded">Please either Sign-Up or Log-In in order to view your cart!</Row>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100 d-flex justify-content-between">
          <Button className="signUpModalLink" onClick={()=>history.push("/signup")} href="#" > Sign-Up </Button>
          <Button className="logInModalLink" onClick={()=>history.push("/login")} href="#" > Log-In </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    );
}


export default SignInModal;