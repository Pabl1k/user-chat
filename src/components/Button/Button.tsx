import React, { FC } from "react";

import { ButtonType } from "./Button.type";
import "./Button.scss";

const Button: FC<ButtonType> = ({ label, disable, onClick }) => {
  return (
    <button
      className={`button ${disable && "disabled"}`}
      disabled={disable}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
