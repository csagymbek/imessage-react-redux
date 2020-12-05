import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/SidebarChat.css";

export default function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar className="sidebarChat__avatar" />
      <div className="sidebarChat__info">
        <h3>channel name</h3>
        <p>last message sent ...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}
