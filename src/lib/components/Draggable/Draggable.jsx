import React, { useEffect, useRef } from "react";
import { classNames } from "../../utils/classNames";

/**
 *
 * @param {object} props
 * @param {string} [props.className] custom CSS class
 * @param {any} [props.children] draggable content
 */
export function Draggable({ className, children, ...other }) {
  const ref = useRef(null);
  useEffect(() => {
    const [rd, ud] = makeDrabbable(ref.current);
    rd();
    return ud;
  }, []);

  const cn = classNames("Draggable", className);
  return (
    <div className={cn} ref={ref} {...other}>
      {children}
    </div>
  );
}

/** @param {HTMLElement} element */
function makeDrabbable(element) {
  let mouseX = 0;
  let mouseY = 0;
  let translateX = 0;
  let translateY = 0;

  /** @param {MouseEvent} e */
  function mouseDown(e) {
    e.preventDefault();
    // @ts-ignore
    if (element.contains(e.target)) {
      element.style.cursor = "grabbing";
      mouseX = e.clientX;
      mouseY = e.clientY;
      document.addEventListener("mouseup", mouseUp);
      document.addEventListener("mousemove", mouseMove);
    }
  }

  /** @param {MouseEvent} e */
  function mouseMove(e) {
    e.preventDefault();
    const deltaX = e.clientX - mouseX;
    const deltaY = e.clientY - mouseY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    translateX += deltaX;
    translateY += deltaY;
    element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  }

  /** @param {MouseEvent} e */
  function mouseUp(e) {
    e.preventDefault();
    element.style.cursor = "grab";
    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", mouseMove);
  }

  function registerDraggable() {
    document.addEventListener("mousedown", mouseDown);
    element.style.cursor = "grab";
    console.log("Registered Draggable");
  }

  function unregistrerDraggable() {
    document.removeEventListener("mousedown", mouseDown);
    element.style.cursor = null;
    console.log("Unregistered Draggable");
  }

  return [registerDraggable, unregistrerDraggable];
}
