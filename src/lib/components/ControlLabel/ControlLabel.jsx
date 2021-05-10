import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef ControlLabelProps
 * @property {React.ReactNode} control control to be labeled
 * @property {boolean} [disabled] disable child control
 * @property {string} label label text
 * @property {"left"|"right"} [labelPosition] label position
 */

/**
 * * A wrapper component that add a label to another control
 * @param {ControlLabelProps & React.ComponentPropsWithoutRef<"label">} props
 */
export const ControlLabel = (props) => {
  const {
    className,
    control,
    disabled = false,
    label,
    labelPosition = "right",
    ...other
  } = props;

  const cn = classNames(
    "ControlLabel",
    `ControlLabel-${labelPosition}`,
    disabled && "ControlLabel-disabled",
    className
  );

  return (
    <label className={cn} {...other}>
      {React.cloneElement(control, { disabled })}
      <span className="ControlLabel-label">{label}</span>
    </label>
  );
};
