import React, {FC, useState} from "react";

import ReceivedMessage from "../ReceivedMessage";
import SentMessage from "../SentMessage";

import TextInput from "../TextInput";
import Button from "../Button";

import {MessagesWindowType} from "./MessagesWindow.type";
import "./MessagesWindow.scss";
import ClipModal from "../ClipModal";
import Scrollbars from "react-custom-scrollbars";
import MessagesWindowHeader from "../MessagesWindowHeader";

/**
 * @param selectedChat selected user full data
 */

const MessagesWindow: FC<MessagesWindowType> = ({ selectedChat }) => {
  const [isClipModal, setIsClipModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  function alertMessage() {
    setInputValue("");
    return alert(`Your message is: ${inputValue}`);
  }

  return (
    <div className="messages-window">
      <MessagesWindowHeader
        iconPath={selectedChat.icon}
        companyName={selectedChat.companyName}
        companyUser={selectedChat.companyUser}
      />
      <Scrollbars
        hideTracksWhenNotNeeded
        style={{ width: "100%" }}
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
        <div className="messages-window__messages-container">
          {selectedChat.messages?.map((message, i) => {
            return (
              <div key={i}>
                <p className="messages-window__date-time">{message.dateTime}</p>
                {message.isReceived ? (
                  <div className="messages-window__received-message">
                    <ReceivedMessage message={message.message} />
                  </div>
                ) : (
                  <div className="messages-window__sent-message">
                    <SentMessage message={message.message} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Scrollbars>
      {isClipModal && <ClipModal />}
      <div className="messages-window__input-container">
        <TextInput
          placeholder="Enter your message..."
          showIcon
          setIsModal={() => setIsClipModal(!isClipModal)}
          value={inputValue}
          setValue={setInputValue}
        />
        <Button label="Send" disable={!inputValue} onClick={alertMessage} />
      </div>
    </div>
  );
};

export default MessagesWindow;
