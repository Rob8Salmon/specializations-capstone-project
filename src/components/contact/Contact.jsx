import React, { useState } from "react";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// import {contactConfig} from

/*BootStrap contact page*/

const Contact = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const postUser = (e) => {
    e.preventDefault();
    console.log("whats up");
    axios
      .post("http://localhost:4000/addUser", {
        firstname,
        lastname,
        email,
        phonenumber,
        date,
        message,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("users", res.data[0].id);
        localStorage.setItem("email", res.data[0].email);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong></strong>
              <br />
              <br />
              <p>
                <strong></strong>
              </p>
            </address>
            <p></p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100" onSubmit={postUser}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    onChange={({ target }) => setFirstName(target.value)}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    onChange={({ target }) => setLastName(target.value)}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    type="phoneNumber"
                    onChange={({ target }) => setPhoneNumber(target.value)}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="date"
                    name="date"
                    placeholder="Date"
                    type="date"
                    onChange={({ target }) => setDate(target.value)}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                onChange={({ target }) => setMessage(target.value)}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
