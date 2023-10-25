import React from "react";
import "../styles/modalWindow.scss";

function ModalWindow({ children, title, isOpen, setIsOpen, onClose }) {
  const closeModal = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className={`modal-window ${isOpen ? "show-modal" : ""}`}>
      <div className="modal-window-content">
        <div className="modal-window-top-banner">
          <h2>{title}</h2>
          <button className="close" onClick={closeModal}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
