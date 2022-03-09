import React, { useEffect, useState } from "react";
import IceCreamFree from "./IceCreamFree";
import "../styles/scss/payment-gateway.scss";
import "../styles/scss/general.css";
import { Card, Button, Form } from "react-bootstrap";
const PaymentGateaway = () => {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  const [cardNumber, setCardNumber] = useState();
  const [cvvNumber, setCvvNumber] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [count, setCount] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const handleSubmit = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 5) {
      setModalShow(true);
    }
  });

  return (
    <div>
      <h1 className="container">Welcome to Daily Coffee</h1>
      <div className="center-component">
        <Card className="card-width">
          <div>
            <Card.Header>
              <span> DAILY COFFEE PAY </span>
              <span className="time-component"> {time} </span>
            </Card.Header>
          </div>
          <Card.Body>
            <Card.Title className="text-center">Payment Gateway</Card.Title>
            <Card.Text>
              <Form>
                <div classname="form-group">
                  <Form.Label htmlFor="EnterCardNumber">Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    classname="form-control"
                    id="cardnumber"
                    aria-describedby="cardnumber"
                    placeholder="Enter Card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Please enter your 16 digit card number
                  </Form.Text>
                </div>

                <div className="form-group">
                  <Form.Label htmlFor="EnterCardNumber">CVV Number</Form.Label>
                  <Form.Control
                    type="text"
                    classname="form-control"
                    type="cvvnumber"
                    id="enteredCvvNumber"
                    placeholder="Enter CVV"
                    onchange={(e) => setCvvNumber(e.target.value)}
                    value={cvvNumber}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Please enter your 3 digit CVV from back of your card
                  </Form.Text>
                </div>

                <div className="form-group">
                  <Form.Label htmlFor="EnterExpiryDate">Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    type="expiryDate"
                    classname="form-control"
                    id="enteredexpiryDate"
                    placeholder=" Enter expiry date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <Button
                    href="#"
                    variant="primary"
                    className="payment-button"
                    onClick={handleSubmit}
                  >
                    Pay Now
                  </Button>
                </div>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        <IceCreamFree show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};
export default PaymentGateaway;
