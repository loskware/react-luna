import React from "react";
import { classNames } from "../../tools/classNames";

/**
 * @param {object} props
 * @param {any} props.children
 * @param {Array<string>} [props.classes]
 * @param {string} [props.fillColor]
 * @param {number} [props.height]
 * @param {string} [props.strokeColor]
 * @param {string} [props.tooltip]
 * @param {number} [props.width]
 * @returns
 */
export function Icon({
  classes = [],
  fillColor = "none",
  height = 24,
  strokeColor = "currentColor",
  children,
  tooltip,
  width = 24
}) {
  const cn = classNames("Icon", ...classes);
  return (
    <svg
      className={cn}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
      {tooltip && <title>{tooltip}</title>}
    </svg>
  );
}
