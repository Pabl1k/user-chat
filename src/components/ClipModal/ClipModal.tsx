import React from "react";

import ModalWindow from "../ModalWindow/ModalWindow";

import "./ClipModal.scss";

const ClipModal = () => {
  const modalOptions = ["option 1", "option 2", "option 3", "option 4"];
  return (
    <div className="clip-modal">
      <ModalWindow width={150} bgColor="#f1f1f1" borderColor="#f8c5ce">
        <div className="clip-modal__option-container">
          {modalOptions.map((opt, i) => {
            return (
              <div key={i} className="clip-modal__single-option">
                {opt}
              </div>
            );
          })}
        </div>
      </ModalWindow>
    </div>
  );
};

export default ClipModal;
