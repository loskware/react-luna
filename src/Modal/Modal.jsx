import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { createClassNames } from "../createClassNames";
import "./Modal.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} props.children
 */
const Modal = ({ classNames = [], children }) => {
  const modalRoot = document.getElementById("modal-root");
  const modal = document.createElement("div");
  modal.classList.add("Modal", "acrylic");
  classNames && modal.classList.add(...classNames);

  useEffect(() => {
    modalRoot?.appendChild(modal);
    return () => {
      modalRoot?.removeChild(modal);
    };
  });

  return createPortal(children, modal);
};

export { Modal };
