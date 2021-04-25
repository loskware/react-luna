import React from "react";
import { classNames } from "../../classNames";
import "./CheckBox.css";

/**
 * A luna-styled checkbox, 
 * @param {object} props
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {boolean} [props.disabled] make checkbox disabled
 * @param {string} [props.label] label text
 * @param {"left"|"right"} [props.labelPosition] label position
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange] onChange callback
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
const CheckBox = ({
  classes = [],
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
        onChange={onChange}
        disabled={disabled}
      />
      <span className="CheckBox-mark"></span>
      {label && <span className="CheckBox-label">{label}</span>}
    </label>
  );
};

export { CheckBox };
