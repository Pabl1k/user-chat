import React, { FC } from "react";

import Avatar from "../Avatar";

import { MessagesWindowHeaderType } from "./MessagesWindowHeader.type";
import "./MessagesWindowHeader.scss";

const MessagesWindowHeader: FC<MessagesWindowHeaderType> = ({
  iconPath,
  companyName,
  companyUser,
}) => {
  return (
    <div className="messages-window-header">
      <Avatar path={iconPath} companyName={companyName} />
      <div className="messages-window-header__company-user-container">
        <span className="messages-window-header__company-name">
          {companyName}
        </span>
        <span className="messages-window-header__company-user">
          {companyUser}
        </span>
      </div>
    </div>
  );
};

export default MessagesWindowHeader;
