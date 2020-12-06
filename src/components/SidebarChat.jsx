import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";
import "../styles/SidebarChat.css";

export default function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChat"
      onClick={() => dispatch(setChat({ chatId: id, chatName }))}
    >
      <Avatar className="sidebarChat__avatar" />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>last message sent ...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}
