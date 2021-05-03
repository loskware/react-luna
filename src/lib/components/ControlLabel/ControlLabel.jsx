import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * A wrapper component that add a label to another control
 * @param {object} props
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {React.ReactElement} props.control control to be labeled
 * @param {boolean} [props.disabled] disable child control
 * @param {string} props.label label text
 * @param {"left"|"right"} [props.labelPosition] label position
 */
export const ControLabel = ({
  classes = [],
  control,
  disabled = false,
  label,
  labelPosition = "right",
  ...other
}) => {
  const cn = classNames(
    "ControlLabel",
    `ControlLabel-${labelPosition}`,
    disabled && "ControlLabel-disabled",
    ...classes
  );
  return (
    <label className={cn} {...other}>
      {React.cloneElement(control, { disabled })}
      <span className="ControlLabel-label">{label}</span>
    </label>
  );
};
