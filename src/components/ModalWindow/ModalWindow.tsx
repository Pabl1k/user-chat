import React, { FC } from "react";

import { ModalWindowType } from "./ModalWindow.type";
import "./ModalWindow.scss";

const ModalWindow: FC<ModalWindowType> = ({
  children,
  width,
  bgColor = "#fff",
  borderColor = "#000",
}) => {
  return (
    <div
      className="modal-window"
      style={{
        width: width,
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
