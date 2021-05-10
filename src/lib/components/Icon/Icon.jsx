import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef IconProps
 * @property {string} [props.tooltip]
 */

/**
 * Icon component
 * @param {IconProps & React.ComponentPropsWithoutRef<"svg">} props 
 * @returns 
 */
export function Icon(props) {
  const {
    className,
    fill = "none",
    height = 24,
    stroke = "currentColor",
    children,
    tooltip,
    width = 24,
    ...other
  } = props;
  const cn = classNames("Icon", className);
  return (
    <svg
      className={cn}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...other}
    >
      {children}
      {tooltip && <title>{tooltip}</title>}
    </svg>
  );
}
