import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './style.css';

const AddedToCartModal = (props) => {
    
    return (
    <>
      <Modal className="Modal" show={props.status}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">
            {props.mediaUrl}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <h3 className="ModalText">This item was added to the cart</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button className="ModalClose" onClick={props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}


export default AddedToCartModal;