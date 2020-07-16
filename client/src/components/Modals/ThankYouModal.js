import React from 'react';
import { useHistory } from "react-router";
import {Button, Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Logo from '../../images/modalLogo.jpg'
import './style.css';

const ThankYouModal = (props) => {
    console.log("props for modals: ", props);

    const history=useHistory();

    return (
      <Modal className="Modal" id="contained-modal-title-vcenter" show={props.status}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">
          <img src={Logo} className="modalPic col col-center" alt="Queen St. Market"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <h3 className="itemAdded">Thank you for your purchase!</h3>
          </Modal.Body>
          <Modal.Body>
          <h5 className="itemAdded text-center">Check your email for a confirmation of this order.</h5>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100 d-flex justify-content-end">
          <Button className="addModalClose" onClick={()=>history.push("/")} href="#" >Back to Products</Button>
          </Row>
        </Modal.Footer>
      </Modal>
    );
}

export default ThankYouModal;