import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @param {object} props
 * @param {string} props.alt
 * @param {Array<string>} [props.classes]
 * @param {number} [props.height]
 * @param {string} props.src
 * @param {number} [props.width]
 */
export const Image = ({ alt = "", classes = [], src, height, width, ...other }) => {
  const cn = classNames("Image", ...classes);
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
