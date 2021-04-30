import React from "react";
import { classNames } from "../../tools/classNames";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {string} props.src
 * @param {string} props.alt
 * @param {number} [props.height]
 * @param {number} [props.width]
 */
const Image = ({ classes = [], src, alt = "", height, width }) => {
  const cn = classNames("Image", ...classes);
  return (
    <img
      className={cn}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export { Image };
