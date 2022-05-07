import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../firebase.init";
import GoogleLogIn from "../Login/SocialLogin/GoogleLogIn";

const Registration = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (error) {
    return (
      <div className="bg-danger text-center p-5 m-5 fs-2 text-white">
        <p>{error.message}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <img
        className="text-center w-50 img-fluid"
        src={
          "https://i.pinimg.com/originals/45/12/4d/45124d126d0f0b6d8f5c4d635d466246.gif"
        }
        alt=""
      />
    );
  }
  if (user) {
    return (
      <div className="bg-danger p-5 m-5 container fs-2">
        <p>User Registered {user.email}</p>
      </div>
    );
  }

  return (
    <div>
      <Form className="container  w-md-75 w-sm-100 mt-2 bg-light p-5 rounded">
        <h1 className="mb-3">Please Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Link className="text-decoration-none" to="/login">
          <span>All ready register?</span>{" "}
        </Link>
        <br />
        <button
          onClick={() => createUserWithEmailAndPassword(email, password)}
          className="btn btn-primary mt-3"
          type="submit"
        >
          Register
        </button>
      </Form>

      <GoogleLogIn></GoogleLogIn>
    </div>
  );
};

export default Registration;
