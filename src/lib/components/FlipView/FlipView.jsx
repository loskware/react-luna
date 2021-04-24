import React from "react";
import { createClassNames } from "../../createClassNames";
import "./FlipView.css";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} props.frontFace
 * @param {any} props.backFace
 * @param {boolean} props.flipped
 */
const FlipView = ({ classNames = [], frontFace, backFace, flipped }) => {
  const cn = createClassNames(
    "FlipView",
    `${flipped ? "FlipView-flipped" : "FlipView-normal"}`,
    ...classNames
  );
  return (
    <div className={cn}>
      <div className="FlipView-wrapper">
        <div className="FlipView-frontFace">{frontFace}</div>
        <div className="FlipView-backFace">{backFace}</div>
      </div>
    </div>
  );
};

export { FlipView };
