import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @param {object} props
 * @param {string} props.alt image alt attribute
 * @param {string} [props.className] custom CSS class
 * @param {number} [props.height] image height
 * @param {string} props.src image src
 * @param {number} [props.width] image width
 */
export const Image = ({ alt = "", className, src, height, width, ...other }) => {
  const cn = classNames("Image", className);
  return (
    <img
      className={cn}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...other}
    />
  );
};
