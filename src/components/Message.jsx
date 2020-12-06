import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/Message.css";

export const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, message, uid, photo, email } },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        className={`message ${user?.email === email && "message__sender"}`}
        ref={ref}
      >
        <Avatar src={photo} className="message__photo" />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);
