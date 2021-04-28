import React from "react";
import { classNames } from "../../classNames";

/**
 * @param {object} props
 * @param {"x"|"y"} [props.axis] rotation axis
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {any} props.frontFace default shown content
 * @param {any} props.backFace content shown when flipped
 * @param {boolean} [props.flipped] make component flipped... or not
 */
const FlipView = ({
  axis = "x",
  classes = [],
  frontFace,
  backFace,
  flipped = false,
}) => {
  const cn = classNames(
    "FlipView",
    flipped && "FlipView-flipped",
    `FlipView-${axis}-axis`,
    ...classes
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
