import React from "react";
import { classNames } from "../../tools/classNames";

/**
 * A luna-styled checkbox, 
 * @param {object} props
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {boolean} props.checked checkbox state
 * @param {boolean} [props.disabled] make checkbox disabled
 * @param {string} [props.label] label text
 * @param {"left"|"right"} [props.labelPosition] label position
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange] onChange callback
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
const CheckBox = ({
  classes = [],
  checked,
  disabled = false,
  label,
  labelPosition = "right",
  onChange,
  variant = "accent",
}) => {

  const cn = classNames(
    "CheckBox",
    `CheckBox-${variant}`,
    `CheckBox-${labelPosition}Label`,
    disabled && "CheckBox-disabled",
    ...classes
  );
  return (
    <label className={cn}>
      <input
        className="CheckBox-input"
        type="checkbox"
        checked = {!disabled && checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="CheckBox-mark"></span>
      {label && <span className="CheckBox-label">{label}</span>}
    </label>
  );
};

export { CheckBox };
