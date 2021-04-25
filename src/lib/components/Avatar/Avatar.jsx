import "./Avatar.css";
import React from "react";
import { createClassNames } from "../../createClassNames";

/**
 * A simple circle avatar
 * @param {object} props
 * @param {Array<string>} [props.classNames] array of CSS class names
 * @param {number} [props.size] height = width = size
 * @param {React.CSSProperties} [props.style] inline styles
 * @param {string} props.src image path (URL)
 */
function Avatar({ classNames = [], size, src, style, ...otherProps }) {
  const cn = createClassNames("Avatar", ...classNames);
  return (
    <img
      className={cn}
      width={`${size}px`}
      height={`${size}px`}
      src={src}
      alt=""
      style={style}
      {...otherProps}
    />
  );
}

export { Avatar };
