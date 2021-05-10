import React from "react";
import { classNames } from "../../../utils/classNames";

/**
 * @typedef PacmanLoaderProps
 * @property {string} [color]
 * @property {string|number} [size]
 */

/**
 * @param {PacmanLoaderProps & React.ComponentPropsWithoutRef<"div">} props
 */
export const PacmanLoader = (props) => {
  const { className, color, size = 25, ...other } = props;
  const cn = classNames("PacmanLoader", className);
  return (
    <div className={cn} style={{ fontSize: size, color }} {...other}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
