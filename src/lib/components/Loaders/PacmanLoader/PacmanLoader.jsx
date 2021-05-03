import React from "react";
import { classNames } from "../../../utils/classNames";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {string} [props.color]
 * @param {string} [props.size]
 */
export const PacmanLoader = ({
  classes = [],
  color,
  size = "25px",
  ...other
}) => {
  const cn = classNames("PacmanLoader", ...classes);
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
