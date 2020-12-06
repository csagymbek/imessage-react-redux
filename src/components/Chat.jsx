import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../styles/Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../features/chatSlice";
import { database } from "../configs/firebase";

export default function Chat() {
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      database
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.ppreventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        {messages.map(({ id, data }) => (
          <Message key={id} contents={data} />
        ))}
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
