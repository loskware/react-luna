import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * A luna-styled radio button,
 * @param {object} props
 * @param {boolean} props.checked checkbox state
 * @param {string} [props.className] custom CSS class
 * @param {boolean} [props.disabled] make checkbox disabled
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange] onChange callback
 * @param {string} [props.value]
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
export const Radio = ({
  checked,
  className,
  disabled = false,
  onChange,
  value,
  variant = "accent",
  ...other
}) => {
  const cn = classNames(
    "Radio",
    `Radio-${variant}`,
    disabled && "Radio-disabled",
    className
  );
  return (
    <label className={cn} {...other}>
      <input
        className="Radio-input"
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
      <span className="Radio-mark"></span>
    </label>
  );
};
