import React from "react";
import { classNames } from "../../classNames";

/**
 * @callback OnChange
 * @param {boolean} checked
 * @param {React.ChangeEvent<HTMLInputElement>} event
 */

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {boolean} props.checked
 * @param {"normal"|"large"|"xlarge"} [props.size]
 * @param {OnChange} props.onChange
 * @param {"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
const Switch = ({
  classes = [],
  checked,
  size = "normal",
  onChange,
  variant = "accent",
}) => {
  const cn = classNames(
    "Switch",
    `Switch-${size}`,
    `Switch-${variant}`,
    ...classes
  );
  return (
    <label className={cn}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked, e)}
      />
      <span></span>
    </label>
  );
};

export { Switch };
