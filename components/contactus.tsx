import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import {ChangeEvent } from 'react'
const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
};

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <h2>Contact Us</h2>
      <Form onSubmit={(event: ChangeEvent) => {
        handleSubmit(event);
      }}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>

        <Form.Label htmlFor="basic-url">Your message</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control id="basic-url" value={message} onChange={(event) => setMessage(event.target.value)} />
        </InputGroup>

        <InputGroup className="mb-3">
          <Button type="submit">Send</Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default ContactUs;