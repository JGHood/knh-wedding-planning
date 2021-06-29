import React, { useEffect, useState } from "react";
import { app } from "./firebase.js";
import jwt_decode from 'jwt-decode';
import { CircularProgress } from "@material-ui/core";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [UID, setUID] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (!(user === null)) {
        const decoded = jwt_decode(user.za);
        setUID(decoded.user_id);
        setIsAuthenticated(true);
      }
      else {
        setUID(null);
      }
      setPending(false);
    });
  }, []);
  if (pending) {
    return (
      <>
        <div style={{ flexDirection:"column", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <h1>Loading in, hold tight!</h1>
          <CircularProgress color="primary"/>
        </div>
      </>
    )
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        UID,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};