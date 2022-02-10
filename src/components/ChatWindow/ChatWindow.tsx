import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";

import ChatsListBar from "../ChatsListBar";
import MessagesWindow from "../MessagesWindow";
import { chatsListState } from "../../state";
import "./ChatWindow.scss";

const ChatWindow = () => {
  /**
   * By default will be shown first chat from the top
   */
  const [selectedChatIndex, setSelectedChatIndex] = useState<number>(0);

  return (
    <div className="chat-window">
      <Scrollbars
        style={{ width: "24.5rem" }}
        renderTrackVertical={({ style }) => (
          <div
            style={{
              ...style,
              backgroundColor: "#F4F4F4",
              right: 2,
              bottom: 0,
              top: 0,
              width: "0.875rem",
              cursor: "pointer",
            }}
          />
        )}
        renderThumbVertical={({ style }) => (
          <div
            style={{
              ...style,
              width: "0.5rem",
              marginLeft: 3,
              borderRadius: "0.25rem",
              boxShadow: "0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.16)",
              backgroundColor: "#C5C5C5",
            }}
          />
        )}
      >
        <ChatsListBar
          state={chatsListState}
          selectedChat={selectedChatIndex}
          setSelectedChat={setSelectedChatIndex}
        />
      </Scrollbars>
      <MessagesWindow selectedChat={chatsListState[selectedChatIndex]} />
    </div>
  );
};

export default ChatWindow;
