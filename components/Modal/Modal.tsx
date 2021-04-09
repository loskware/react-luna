import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

interface ModalProps {
  classNames?: string;
  children: any;
}

const Modal = ({ classNames = "", children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  const modal = document.createElement("div");
  modal.classList.add("Modal", "acrylic");
  if (classNames) modal.classList.add(classNames);

  useEffect(() => {
    modalRoot?.appendChild(modal);
    return () => {
      modalRoot?.removeChild(modal);
    };
  });

  return createPortal(children, modal);
};

export { Modal };
