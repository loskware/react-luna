import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @callback OnChange
 * @param {boolean} checked
 * @param {React.ChangeEvent<HTMLInputElement>} event
 */

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {boolean} props.checked
 * @param {boolean} [props.disabled]
 * @param {"compact"|"normal"|"large"} [props.size]
 * @param {OnChange} props.onChange
 * @param {"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
export const Switch = ({
  classes = [],
  checked,
  disabled = false,
  size = "normal",
  onChange,
  variant = "accent",
  ...other
}) => {
  const cn = classNames(
    "Switch",
    `Switch-${size}`,
    `Switch-${variant}`,
    ...classes
  );
  return (
    <label className={cn} {...other}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked, e)}
      />
      <span></span>
    </label>
  );
};
