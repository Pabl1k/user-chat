import React from "react";
import ChatWindow from "../ChatWindow";
import "./ChatPageView.scss";

const ChatPageView = () => {
  return (
    <div className="chat-page">
      <div>
        <span className="chat-page__title">Messages</span>
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatPageView;
