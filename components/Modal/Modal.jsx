import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

/**
 * @param {object} props
 * @param {any} props.children
 */
const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const modal = document.createElement("div");
  modal.classList.add("Modal", "acrylic");

  useEffect(() => {
    modalRoot?.appendChild(modal);
    return () => {
      modalRoot?.removeChild(modal);
    };
  });

  return createPortal(children, modal);
};

export { Modal };
