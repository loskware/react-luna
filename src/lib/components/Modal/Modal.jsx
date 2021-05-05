import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {any} props.children
 * @param {string} [props.rootId]
 */
export const Modal = ({ className, children, rootId = "modal-root" }) => {
  let modalRoot = document.getElementById(rootId);
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = rootId;
    document.body.append(modalRoot);
  }
  const modal = document.createElement("div");
  modal.classList.add("Modal", "luna-acrylic");
  className && modal.classList.add(className);

  useEffect(() => {
    modalRoot.append(modal);
    return () => {
      modal.remove();
    };
  });

  return createPortal(children, modal);
};