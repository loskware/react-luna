import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * A simple circle avatar
 * @param {object} props
 * @param {string} [props.classes] custom CSS classes
 * @param {number} [props.size] height = width = size
 * @param {string} props.src image path (URL)
 * @param {React.CSSProperties} [props.style] inline styles
 */
export const Avatar = ({ classes, size, src, style, ...other }) => {
  const cn = classNames("Avatar", classes);
  return (
    <img
      className={cn}
      width={`${size}px`}
      height={`${size}px`}
      src={src}
      alt=""
      style={style}
      {...other}
    />
  );
};
