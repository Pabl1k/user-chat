import React, {FC} from "react";

import {ReactComponent as ClipIcon} from "../../assets/Icons/clip.svg";

import {TextInputType} from "./TextInput.type";
import "./TextInput.scss";

const TextInput: FC<TextInputType> = ({
  type = "text",
  placeholder,
  showIcon,
  setIsModal,
  value,
  setValue,
}) => {
  function enterKey(e: string): void {
    if (e === "Enter" && value) {
      setValue("");
      alert(`Your message is: ${value}`);
    }
  }
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
        onKeyPress={(e) => enterKey(e.key)}
      />
    </>
  );
};

export default TextInput;
