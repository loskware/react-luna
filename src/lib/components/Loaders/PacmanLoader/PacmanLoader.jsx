import React from "react";
import { classNames } from "../../../tools/classNames";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 */
const PacmanLoader = ({ classes = [] }) => {
  const cn = classNames("PacmanLoader", ...classes);
  return (
    <div className={cn}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { PacmanLoader };
