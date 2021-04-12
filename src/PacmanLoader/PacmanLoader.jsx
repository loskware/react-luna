import React from "react";
import { createClassNames } from "../createClassNames";
import "./PacmanLoader.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 */
const PacmanLoader = ({ classNames = [] }) => {
  const cn = createClassNames("PacmanLoader", ...classNames);
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
