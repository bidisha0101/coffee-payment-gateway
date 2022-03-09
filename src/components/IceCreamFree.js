import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
const IceCreamFree = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Congratulation !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You win a free ice cream !! contact with your daily coffeee barista
          today...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IceCreamFree;
