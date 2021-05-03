import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @callback OnChange
 * @param {boolean} checked
 * @param {React.ChangeEvent<HTMLInputElement>} event
 */

/**
 * @param {object} props
 * @param {string} [props.className] custom CSS class
 * @param {boolean} props.checked
 * @param {boolean} [props.disabled]
 * @param {"compact"|"normal"|"large"} [props.size]
 * @param {OnChange} props.onChange
 * @param {"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
export const Switch = ({
  className,
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
    className
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
