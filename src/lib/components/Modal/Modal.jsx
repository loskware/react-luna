import { useEffect } from "react";
import { createPortal } from "react-dom";
import { classNames } from "../../classNames";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {any} props.children
 */
const Modal = ({ classes = [], children }) => {
  const modalRoot = document.getElementById("modal-root");
  const modal = document.createElement("div");
  modal.classList.add("Modal", "acrylic");
  const cn = classNames(...classes);
  cn && modal.classList.add(cn);

  useEffect(() => {
    modalRoot?.appendChild(modal);
    return () => {
      modalRoot?.removeChild(modal);
    };
  });

  return createPortal(children, modal);
};

export { Modal };
