import React, { FC } from "react";

import { ReactComponent as ClipIcon } from "../../assets/Icons/clip.svg";

import { TextInputType } from "./TextInput.type";
import "./TextInput.scss";

const TextInput: FC<TextInputType> = ({
  type = "text",
  placeholder,
  showIcon,
  setIsModal,
  value,
  setValue,
}) => {
  return (
    <>
      {showIcon && (
        <ClipIcon className="text-input__icon" onClick={setIsModal} />
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="text-input"
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </>
  );
};

export default TextInput;
