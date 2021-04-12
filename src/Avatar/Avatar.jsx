import "./Avatar.scss";
import React from "react";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {boolean} [props.hasBorder]
 * @param {number} [props.size]
 * @param {string} props.src
 */
function Avatar({ classNames, hasBorder = false, size, src }) {
  return (
    <img
      className={`Avatar ${classNames || ""}`}
      width={`${size}px`}
      height={`${size}px`}
      src={src}
      alt=""
      style={
        hasBorder
          ? { border: "solid 2px var(--avatar-color-border" }
          : undefined
      }
    />
  );
}

export { Avatar };
