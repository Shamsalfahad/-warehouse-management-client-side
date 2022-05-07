import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../../firebase.init";

const GoogleLogIn = () => {
  const auth = getAuth(app);
  const [
    signInWithGoogle,
    googleUser,
    googleLoading,
    googleError,
  ] = useSignInWithGoogle(auth);

  const [user, loading, error] = useAuthState(auth);

  if (user) {
    console.log(user.email);
    fetch("https://cryptic-shelf-45142.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
      });
  }

  if (googleError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }
  if (googleLoading) {
    return <p>Loading...</p>;
  }
  if (googleUser) {
    return (
      <div className="bg-danger text-center p-2 m-5 fs-2 text-white">
        <p>Signed In User {googleUser.email}</p>
      </div>
    );
  }

  return (
    <div className="d-lg-flex d-sm-block justify-content-center my-3 p-2">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-xl bg-dark text-white p-3 m-2 "
      >
        Sign In with Google
      </button>

    </div>
  );
};

export default GoogleLogIn;
