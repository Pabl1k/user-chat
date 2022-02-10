import React, { FC } from "react";

import Avatar from "../Avatar";

import { ChatsListBarType } from "./ChatsListBar.type";
import "./ChatsListBar.scss";

/**
 *
 * @param state full state, should come from server
 * @param selectedChat chat index to show it with different color
 * @param setSelectedChat option to change selected chat
 *
 */

const ChatsListBar: FC<ChatsListBarType> = ({
  state,
  selectedChat,
  setSelectedChat,
}) => {
  return (
    <div className="chats-list">
      {state.map((state, i) => {
        return (
          <div
            key={i}
            className={`chats-list__single-chat ${
              i === selectedChat && "selected"
            }`}
            onClick={() => setSelectedChat(i)}
          >
            <div className="chats-list__icon-container">
              <Avatar path={state.icon} companyName={state.companyName} />
            </div>
            <div className="chats-list__name-message-container">
              <div className="chats-list__user-name-time-container">
                <span className="chats-list__user-name">
                  {state.companyName}
                </span>
                <span className="chats-list__user-time">
                  {state.messages[state.messages.length - 1].dateTime}
                </span>
              </div>
              <span className="chats-list__user-message">
                {state.messages[state.messages.length - 1].message.slice(0, 30)}{" "}
                ...
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatsListBar;
