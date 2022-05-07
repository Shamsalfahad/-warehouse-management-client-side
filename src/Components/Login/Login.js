import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase.init";
import GoogleLogIn from "./SocialLogin/GoogleLogIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    googleUer,
    googleLoading,
    googleError,
  ] = useSignInWithEmailAndPassword(auth);

  const [user] = useAuthState(auth);
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Email sent!");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  // let navigate = useNavigate();
  // let location = useLocation();

  // let from = location.state?.from?.pathname || "/";

  if (googleError) {
    return (
      <div className="bg-danger text-center p-5 m-5 fs-2 text-white">
        <p>{googleError.message}</p>
      </div>
    );
  }
  if (googleLoading) {
    return (
      <img
        className="text-center img-fluid"
        src={
          "https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0"
        }
        alt=""
      />
    );
  }
  if (googleUer) {
    return (
      <div className="bg-danger p-5 m-5 container fs-2">
        <p>Signed In User {googleUer.email}</p>
      </div>
    );
  }

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Form
        onSubmit={handleForm}
        className="container w-md-75 w-sm-100 mt-2  bg-light p-5 rounded"
      >
        <h1 className="mb-3">Please Login</h1>
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
        <Link className="text-decoration-none " to="/registration">
          <span>New to perfume gallery?</span>{" "}
        </Link>
        <br />

        <Link
          onClick={handlePasswordReset}
          to=""
          className="text-danger text-decoration-none"
        >
          Forget password?
        </Link>
        <br />

        <button
          onClick={() => signInWithEmailAndPassword(email, password)}
          className="btn btn-primary mt-3"
          type="submit"
        >
          Login
        </button>
        <ToastContainer></ToastContainer>
      </Form>

      <GoogleLogIn></GoogleLogIn>
    </div>
  );
};

export default Login;
