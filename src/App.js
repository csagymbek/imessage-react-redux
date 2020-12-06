import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Imessage from "./components/Imessage";
import { login, logout, selectUser } from "./features/userSlice";
import "./styles/App.css";
import Login from "./components/Login";
import { auth } from "./configs/firebase";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}
