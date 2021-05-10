import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef FlipViewProps
 * @property {"x"|"y"} [axis] rotation axis
 * @property {React.ReactNode} frontFace default shown content
 * @property {React.ReactNode} backFace content shown when flipped
 * @property {boolean} [flipped] make component flipped... or not
 */

/**
 * A container that can flip visible face (back/front)
 * @param {FlipViewProps & React.ComponentPropsWithoutRef<"div">} props
 * @returns 
 */
export const FlipView = (props) => {
  const {
    axis = "x",
    className,
    frontFace,
    backFace,
    flipped = false,
    ...other
  } = props;

  const cn = classNames(
    "FlipView",
    flipped && "FlipView-flipped",
    `FlipView-${axis}-axis`,
    className
  );
  
  return (
    <div className={cn} {...other}>
      <div className="FlipView-wrapper">
        <div className="FlipView-frontFace">{frontFace}</div>
        <div className="FlipView-backFace">{backFace}</div>
      </div>
    </div>
  );
};
