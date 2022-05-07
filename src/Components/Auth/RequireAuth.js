import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import app from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const auth = getAuth(app);
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <img
        src={
          "https://i.pinimg.com/originals/45/12/4d/45124d126d0f0b6d8f5c4d635d466246.gif"
        }
        alt=""
      />
    );
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default RequireAuth;
