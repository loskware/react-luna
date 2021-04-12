import "./Avatar.scss";
import React from "react";
import { createClassNames } from "../createClassNames";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {boolean} [props.borderColor]
 * @param {number} [props.size]
 * @param {string} props.src
 */

function Avatar({
  classNames = [],
  borderColor,
  size,
  src
}) {
  const cn = createClassNames("Avatar", ...classNames);
  return /*#__PURE__*/React.createElement("img", {
    className: cn,
    width: `${size}px`,
    height: `${size}px`,
    src: src,
    alt: "",
    style: borderColor ? {
      border: `solid 2px ${borderColor}`
    } : null
  });
}

export { Avatar };