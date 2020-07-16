import React from 'react';
import { useHistory } from "react-router";
import {Button, Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Logo from '../../images/modalLogo.jpg'
import './style.css';

const AddedToCartModal = (props) => {
    console.log("props for modals: ", props);

    const history=useHistory();

    return (
      <Modal className="Modal" id="contained-modal-title-vcenter" show={props.status}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter text-center">
          <img src={Logo} className="modalPic col col-center" alt="Queen St. Market"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <img className="modalPic modalPicQuery col col-center" src={process.env.PUBLIC_URL + props.image} alt="This is your product"/>
        </Modal.Body>
        <Modal.Body className="d-flex justify-content-center text-center">
          <Row className="greatTaste">You've got great taste!</Row>
        </Modal.Body>
        <Modal.Body className="d-flex justify-content-center text-center">
          <Row className="itemAdded">This item was added to your cart.</Row>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100 d-flex justify-content-between">
          <Button className="addModalClose" onClick={()=>history.push("/")} href="#" >Go Back To Products</Button>
          <Button className="addModalClose" onClick={()=>history.push("/cart")} href="#" >View Cart</Button>
          {/* <Button className="addModalClose" status={props.status} onClick={props.hideModal}>Close</Button> */}
          </Row>
        </Modal.Footer>
      </Modal>
    );
}


export default AddedToCartModal; 