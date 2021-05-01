import React from "react";
import { classNames } from "../../../tools/classNames";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {string} [props.color]
 * @param {string} [props.size]
 */
const PacmanLoader = ({ classes = [], color, size = "25px" }) => {
  const cn = classNames("PacmanLoader", ...classes);
  return (
    <div className={cn} style={{ fontSize: size, color }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { PacmanLoader };
