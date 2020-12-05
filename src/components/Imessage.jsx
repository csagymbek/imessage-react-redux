import React from "react";
import "../styles/Imessage.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

export default function Imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}
