import axios from 'axios';
import React, { useState } from 'react';
//import from bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import the bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import the css for the login form

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();

    const user = {
      name: email,
      password: password
    };

    axios.post('http://localhost:4000/users/', user)
      .then(response => {
        // Handle the response
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    const user = {
      name: email,
      password: password
    };

    axios.post('http://localhost:4000/users/login', user)
      .then(response => {
        // Handle the response
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <Form onSubmit={handleSumbit}>
      <h1>Login Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSumbit}>
        Submit
      </Button>
      <br />
      <br />
      <Button variant="primary" type="button" onClick={handleCreateUser}>
        Create a User
      </Button>
    </Form>
  );
};

export default App;