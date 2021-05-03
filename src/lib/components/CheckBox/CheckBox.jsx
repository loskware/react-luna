import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * A luna-styled checkbox,
 * @param {object} props
 * @param {boolean} props.checked checkbox state
 * @param {string} [props.className] custom CSS class
 * @param {boolean} [props.disabled] make checkbox disabled
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange] onChange callback
 * @param {string} [props.value]
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
export const CheckBox = ({
  checked,
  className,
  disabled = false,
  onChange,
  value,
  variant = "accent",
  ...other
}) => {
  const cn = classNames(
    "CheckBox",
    `CheckBox-${variant}`,
    disabled && "CheckBox-disabled",
    className
  );
  return (
    <label className={cn} {...other}>
      <input
        className="CheckBox-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
      <span className="CheckBox-mark"></span>
    </label>
  );
};
