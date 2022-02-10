import React, { FC } from "react";

import "./SentMessage.scss";

/**
 * @param message sent message (comes from server)
 */

const SentMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="sent-message">
      <p>{message}</p>
    </div>
  );
};

export default SentMessage;
