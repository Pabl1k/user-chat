import React, { FC } from "react";

import "./ReceivedMessage.scss";

/**
 * @param message received message (comes from server)
 */

const ReceivedMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="received-message">
      <p>{message}</p>
    </div>
  );
};

export default ReceivedMessage;
