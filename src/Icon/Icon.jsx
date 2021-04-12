import React from "react";
import { createClassNames } from "../createClassNames";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {number} [props.size]
 * @param {string} [props.fillColor]
 * @param {string} [props.strokeColor]
 * @param {any} props.children
 * @param {string} [props.tooltip]
 * @returns
 */
export function Icon({
  classNames = [],
  size = 24,
  fillColor = "none",
  strokeColor = "currentColor",
  children,
  tooltip = "",
}) {
  const cn = createClassNames("Icon", ...classNames);
  return (
    <svg
      className={cn}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
      <title>{tooltip}</title>
    </svg>
  );
}
