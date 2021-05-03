import React from "react";
import { classNames } from "../../../utils/classNames";

/**
 * @param {object} props
 * @param {string} [props.className] custom CSS class
 * @param {string} [props.color]
 * @param {string} [props.size]
 */
export const PacmanLoader = ({
  className,
  color,
  size = "25px",
  ...other
}) => {
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
