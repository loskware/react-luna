import React from "react";
import { classNames } from "../../tools/classNames";


/**
 * A simple circle avatar
 * @param {object} props
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {number} [props.size] height = width = size
 * @param {React.CSSProperties} [props.style] inline styles
 * @param {string} props.src image path (URL)
 */
function Avatar({ classes = [], size, src, style, ...otherProps }) {
  const cn = classNames("Avatar", ...classes);
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
