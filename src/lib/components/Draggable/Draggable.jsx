import React, { useEffect, useRef } from "react";
import { createClassNames } from "../../createClassNames";

/**
 *
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} [props.children]
 */
export function Draggable({ classNames = [], children }) {
  const ref = useRef(null);
  useEffect(() => {
    const [rd, ud] = makeDrabbable(ref.current);
    rd();
    return ud;
  }, []);

  const cn = createClassNames("Draggable", ...classNames);
  return (
    <div className={cn} ref={ref} style={{ position: "absolute" }}>
      {children}
    </div>
  );
}


function makeDrabbable(element) {
  let mouseX = 0;
  let mouseY = 0;

  /** @param {MouseEvent} e */
  function mouseDown(e) {
    e.preventDefault();
    if (e.target === element) {
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
    element.style.left = `${element.offsetLeft + deltaX}px`;
    element.style.top = `${element.offsetTop + deltaY}px`;
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
