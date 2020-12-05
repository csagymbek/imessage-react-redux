import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";

export default function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.ppreventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <h1>Message</h1>
      </div>
      <div className="chat__input">
        <form action="">
          <input
            type="text"
            placeholder="iMessage"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}
