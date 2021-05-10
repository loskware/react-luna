import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * @typedef ModalProps
 * @property {string} [rootId]
 */

/**
 * A component for showing modal contents
 * @param {ModalProps & import("react").ComponentPropsWithoutRef<"div">} props
 * @returns 
 */
export const Modal = (props) => {
  const { className, children, rootId = "modal-root" } = props;
  
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