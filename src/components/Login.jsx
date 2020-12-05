import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../configs/firebase";
import "../styles/Login.css";

export default function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((er) => alert(er.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="imessage logo"
        />
        <h1>iMessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}
